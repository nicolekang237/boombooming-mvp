/**
 * upload.js - BoomBooming Zero-Wait UX Logic (v2.11)
 */

document.addEventListener('DOMContentLoaded', () => {
  const step1 = document.getElementById('step-1');
  const step3 = document.getElementById('step-3');
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');
  
  const header = document.getElementById('header');
  const bottomNav = document.getElementById('bottom-nav');
  const btnBack = document.getElementById('btn-back');
  
  const videoPlayer = document.getElementById('video-player');
  const progressBox = document.getElementById('progress-box');
  const progressStatus = document.getElementById('progress-status');
  
  const inputTitle = document.getElementById('input-title');
  const inputDesc = document.getElementById('input-desc');
  const inputTags = document.getElementById('input-tags');
  const btnPublish = document.getElementById('btn-publish');
  
  const subtitleOverlay = document.getElementById('subtitle-overlay');
  const toggleSubtitles = document.getElementById('toggle-subtitles');

  let pollingInterval = null;
  let subtitleInterval = null;

  // STEP 1: Triggers file selection
  dropZone.addEventListener('click', () => {
    fileInput.click();
  });

  // Zero-Wait UX Transition
  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const videoURL = URL.createObjectURL(file);
      videoPlayer.src = videoURL;
      
      // Transition to Step 3
      step1.style.display = 'none';
      bottomNav.style.display = 'none';
      step3.style.display = 'flex';
      header.style.display = 'flex';
      
      startMockAIProcessing(file.name);
    }
  });

  // Cancel Policy
  btnBack.addEventListener('click', () => {
    if (confirm("업로드 및 AI 분석 작업을 취소하시겠습니까?")) {
      clearInterval(pollingInterval);
      clearInterval(subtitleInterval);
      
      // Reset inputs
      inputTitle.value = '';
      inputDesc.value = '';
      inputTags.value = '';
      
      inputTitle.classList.add('skeleton');
      inputDesc.classList.add('skeleton');
      inputTags.classList.add('skeleton');
      
      inputTitle.readOnly = true;
      inputDesc.readOnly = true;
      inputTags.readOnly = true;
      
      btnPublish.disabled = true;
      subtitleOverlay.innerText = '';
      progressBox.classList.remove('active');
      
      fileInput.value = "";
      videoPlayer.src = "";

      // Back to step 1
      step3.style.display = 'none';
      header.style.display = 'none';
      step1.style.display = 'flex';
      bottomNav.style.display = 'flex';
    }
  });

  // AI State Machine (Mock Polling)
  function startMockAIProcessing(filename) {
    progressBox.classList.add('active');
    
    // Test Fallback if filename contains 'fail'
    const willFail = filename.toLowerCase().includes('fail');
    
    const states = [
      { text: "⏳ S3 업로드 중...", time: 0 },
      { text: "⚙️ FFmpeg 프록시 생성 중...", time: 2000 },
      { text: "🤖 Gemini 1.5 Pro 분석 중...", time: 4000 },
      { text: "✨ 텍스트 생성 중...", time: 6000 }
    ];
    
    let currentState = 0;
    progressStatus.innerText = states[currentState].text;
    videoPlayer.play();

    pollingInterval = setInterval(() => {
      currentState++;
      if (currentState < states.length) {
        progressStatus.innerText = states[currentState].text;
      } else {
        clearInterval(pollingInterval);
        
        if (willFail) {
          handleAIFailure();
        } else {
          handleAISuccess();
        }
      }
    }, 2000);
  }

  function handleAISuccess() {
    progressBox.classList.remove('active');
    
    // Remove skeleton
    inputTitle.classList.remove('skeleton');
    inputDesc.classList.remove('skeleton');
    inputTags.classList.remove('skeleton');
    
    // Make editable
    inputTitle.readOnly = false;
    inputDesc.readOnly = false;
    inputTags.readOnly = false;
    
    // Type out AI data
    typeWriter(inputTitle, "에일리 최신 투어 현장 직캠 🔥");
    typeWriter(inputDesc, "무대를 완전히 찢어놓은 오늘자 퍼포먼스입니다. 관객 호응 장난 아니네요! #에일리 #콘서트 #라이브");
    typeWriter(inputTags, "Music, Concert, Live, Ailee");
    
    btnPublish.disabled = false;
    startMockSubtitles();
  }

  function handleAIFailure() {
    progressStatus.innerText = "❌ AI 분석 실패. 직접 입력해주세요.";
    setTimeout(() => {
      progressBox.classList.remove('active');
    }, 2000);
    
    // Remove skeleton but leave empty
    inputTitle.classList.remove('skeleton');
    inputDesc.classList.remove('skeleton');
    inputTags.classList.remove('skeleton');
    
    inputTitle.readOnly = false;
    inputDesc.readOnly = false;
    inputTags.readOnly = false;
    
    inputTitle.placeholder = "새 게시물";
    btnPublish.disabled = false;
  }

  // Typewriter effect
  function typeWriter(element, text) {
    let i = 0;
    element.value = "";
    function type() {
      if (i < text.length) {
        element.value += text.charAt(i);
        i++;
        setTimeout(type, 30); // 30ms interval
      }
    }
    type();
  }

  // Subtitle Simulation
  function startMockSubtitles() {
    if (!toggleSubtitles.checked) return;
    
    const lines = [
      "무대를 찢어놓은",
      "오늘자 퍼포먼스!",
      "소리 질러~!!",
      "🔥🔥🔥"
    ];
    let idx = 0;
    
    subtitleOverlay.innerText = lines[idx];
    subtitleInterval = setInterval(() => {
      if(!toggleSubtitles.checked) {
        subtitleOverlay.innerText = "";
        return;
      }
      idx = (idx + 1) % lines.length;
      subtitleOverlay.innerText = lines[idx];
    }, 2500);
  }

  toggleSubtitles.addEventListener('change', (e) => {
    if(e.target.checked) {
      startMockSubtitles();
    } else {
      subtitleOverlay.innerText = "";
    }
  });

});
