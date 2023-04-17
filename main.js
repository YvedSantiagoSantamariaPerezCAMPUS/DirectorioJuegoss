$(window).scroll(function() {
    $('.whatsapp-logo').css({
      'transform': 'translate(0, ' + $(this).scrollTop() + 'px)'
    });
  });

<script>
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
</script>

