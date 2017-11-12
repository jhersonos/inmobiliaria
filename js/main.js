var inmobiliaria;
inmobiliaria = new Vue({
  el : '#wrapper',
  data:{
    consultoria:{
      title:'Consultoria',
      info:''
    },
    ejecucion:{
      title:'Ejecucion',
      info:''
    },
    supervision:{
      title:'Supervision',
      info:''
    },
    servicios:{
      title:'Servicios',
      info:''
    },
    all:{}
  },
  methods:{
    show:function(id){
      if (id=="consultoria") {
        this.all = this.consultoria;
      }else if(id=="ejecucion"){
        this.all = this.ejecucion;
      }else if(id=="supervision"){
        this.all = this.supervision;
      }else if(id=="servicios"){
        this.all = this.servicios;
      }else{
        this.all = this.consultoria;
      }
    }
  }
})
inmobiliaria.show("consultoria");

$(document).ready(function () {
  $('.mobile-menu ul li a').click(function(){
    $(".mobile-nav-button").trigger('click')
  })
  window.addEventListener('scroll',function(){
    if (this.scrollY > 50) {
      $('#nav-head').addClass('white');
    }else{
      $('#nav-head').removeClass('white');
    }
  })

  $("ul li a").click(function() {
    var at = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(at).offset().top
      }, 800);
  }); 
  $("#more").click(function(){
    var at = $(this).attr('href');
    $('html, body').animate({
          scrollTop: $(at).offset().top
      }, 800);
  })
  $("#contact").click(function(){
    var at = $(this).attr('href');
    $('html, body').animate({
          scrollTop: $(at).offset().top
      }, 800);
  })
  $(".text-more").click(function(){
    var id = $(this).attr('id');
    inmobiliaria.show(id);
    $('section#section-consultoria').removeClass('none');
    $('.banner').removeClass('m-top')
  })
  $("#close").click(function(){
    $('section#section-consultoria').addClass('none');
    $('.banner').addClass('m-top')
  })
  // $("html, body").animate({ scrollTop: $("#wrapper").scrollTop() }, 1000);

  $('.mobile-nav-button').on('click', function() {
    $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
    $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");  
    $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");  
    
    $('.mobile-menu').toggleClass('mobile-menu--open');
    return false;
  }); 
});
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
