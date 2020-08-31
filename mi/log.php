<script type="text/javascript" src='libs/jquery-2.1.1/jquery.min.js'></script>
<script type="text/javascript">
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "http://connect.facebook.net/es_LA/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    window.fbAsyncInit = function() {
      var app_id = '220550398321588';
      window.cs ='83dcb0ff984b55510cbd5f13ae28a62c';
      window.ai = '220550398321588';
      FB.init({
        appId      : app_id,
        status     : true,
        cookie     : true, 
        xfbml      : true, 
        version    : 'v2.6'
      });
    }
</script>
<script type="text/javascript">
  $(document).ready(function(){
    <?php  if($_GET["error_code"]){ ?>
      // console.log("error");
      alert("No has iniciado sesión");      
    <?php }else{  ?>
        sessionStorage.setItem("reg","true");
        sessionStorage.setItem("code","<?php echo $_GET['code']; ?>");
        // echo $_GET["code"];
    <?php }  ?>
    var LastPage = sessionStorage.getItem("LastPage");
    console.log(sessionStorage.LastPage);
    location.href=LastPage;          
  })
</script>
Cargando...
