<!-- ตัวเล่นเสียง -->
<audio id="clickSound" src="click.mp3" preload="auto"></audio>

<!-- JavaScript -->
<script>
  // แสดงรถแบบเฟดขึ้น
  const carCards = document.querySelectorAll('.car-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  carCards.forEach(card => {
    observer.observe(card);
  });

  // เสียงคลิก + popup แจ้งเตือนเมื่อกดปุ่ม
  const sound = document.getElementById("clickSound");
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      sound.play(); // เล่นเสียง
      alert("ขอบคุณที่สนใจ! ติดต่อเบอร์ 089-xxx-xxxx หรือ Facebook: รถมือสองเจนดี");
    });
  });
</script>
