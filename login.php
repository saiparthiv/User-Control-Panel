<?php
session_start();
require 'includes/dbcon.php';
require 'includes/init.php';

// Check if $_COOKIE already set
if(isset($_COOKIE['remember_me']))
{  
    $str = $_COOKIE['remember_me'];
    $stmt = $odb -> query("SELECT * FROM `players` WHERE SessID='$str'");
    $row= $stmt -> fetch();
    if($_COOKIE['remember_me'] == $row['SessID'])
    {
    	//header("Location:index.php");
    }
}
?>
<!DOCTYPE html>
<html lang="en">

	<!-- begin::Head -->
	<head>
		<base href="">
		<meta charset="utf-8" />
		<title>Horizon Gaming | UCP</title>
		<meta name="description" content="Login page example">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

		<!--begin::Fonts -->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700">

		<!--end::Fonts -->

		<!--begin::Page Custom Styles(used by this page) -->
		<link href="assets/css/pages/login/login-4.css" rel="stylesheet" type="text/css" />

		<!--end::Page Custom Styles -->

		<!--begin::Global Theme Styles(used by all pages) -->
		<link href="assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
		<link href="assets/css/style.bundle.css" rel="stylesheet" type="text/css" />

		<!--end::Global Theme Styles -->

		<!--begin::Layout Skins(used by all pages) -->
		<link href="assets/css/skins/header/base/light.css" rel="stylesheet" type="text/css" />
		<link href="assets/css/skins/header/menu/light.css" rel="stylesheet" type="text/css" />
		<link href="assets/css/skins/brand/dark.css" rel="stylesheet" type="text/css" />
		<link href="assets/css/skins/aside/dark.css" rel="stylesheet" type="text/css" />

		<!--end::Layout Skins -->
		<link rel="shortcut icon" href="assets/media/logos/favicon.ico" />
	</head>

	<!-- end::Head -->

	<!-- begin::Body -->
	<body class="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading">

		<!-- begin:: Page -->
		<div class="kt-grid kt-grid--ver kt-grid--root">
			<div class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v4 kt-login--signin" id="kt_login">
				<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" style="background-image: url(assets/media/bg/bg-2.jpg);">
					<div class="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
						<div class="kt-login__container">
							<div class="kt-login__logo">
								<a href="login.php">
									<img src="assets/media/logos/hzrp.png">
								</a>
							</div>
							<div class="kt-login__signin">
								<div class="kt-login__head">
									<h3 class="kt-login__title">Login To User Control Panel</h3>
								</div>
									<?php
if (!($player -> LoggedIn()))
{
	if (isset($_POST['loginBtn']))
	{
		$username = $_POST['username'];
		$password = $_POST['password'];
		$password = hash('sha512',$password);
		$errors = array();

		if (empty($username) || empty($password))
		{
			$errors[] = '';
		}

		if (empty($errors))
		{
			$SQLCheckLogin = $odb -> prepare("SELECT COUNT(*) FROM `players` WHERE `username` = :username AND `password` = :password");
			$SQLCheckLogin -> execute(array(':username' => $username, ':password' => $password));
			$countLogin = $SQLCheckLogin -> fetchColumn(0);
			if ($countLogin == 1)
			{
				$SQLGetInfo = $odb -> prepare("SELECT `username`, `uid` FROM `players` WHERE `username` = :username AND `password` = :password");
				$SQLGetInfo -> execute(array(':username' => $username, ':password' => $password));
				$userInfo = $SQLGetInfo -> fetch(PDO::FETCH_ASSOC);
				$userid = $userInfo['uid'];

				if(isset($_POST['remember_me']))
					{

                      // Set cookie variables
					  $hash = 'alancanexplain';
					  $value = md5($hash);
					  $domain = ($_SERVER['HTTP_HOST'] != 'localhost') ? $_SERVER['HTTP_HOST'] : false;
                      setcookie ("remember_me",$value,time()+24 * 60 * 60 * 30,'/',$domain,false,false);
                      $stmt = $odb -> query("UPDATE `players` SET `SessID`='$value' WHERE `uid`='$userid'");
                    }
                    $_SESSION['username']= $userInfo['username'];
                   

				if ($userInfo['uid'] > -1)
				{
					$_SESSION['username'] = $userInfo['username'];
					$_SESSION['ID'] = $userInfo['uid'];
					echo '<div class="alert alert-success" role="alert">
                            <div class="alert-icon"><i class="flaticon-warning"></i></div>
                            <div class="alert-text">Success! Logging in now...</div>
                        </div><meta http-equiv="refresh" content="3;url=index.php">';
				}
				else
				{
					echo '<div class="alert alert-danger" role="alert">
                            <div class="alert-icon"><i class="flaticon-questions-circular-button"></i></div>
                            <div class="alert-text">Unspecified Error. Try again!</div>
                        </div>';
				}
			}
			else
			{
				echo '<div class="alert alert-danger fade show" role="alert">
                            <div class="alert-icon"><i class="flaticon-warning"></i></div>
                            <div class="alert-text">Incorrect Credentials. Please enter again!</div>
                            <div class="alert-close">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true"><i class="la la-close"></i></span>
                                </button>
                            </div>
                        </div>';
			}
		}
		else
		{
			echo '<div class="alert alert-danger fade show" role="alert">
                            <div class="alert-icon"><i class="flaticon-warning"></i></div>
                            <div class="alert-text">Error! Please fill all fields.</div>
                            <div class="alert-close">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true"><i class="la la-close"></i></span>
                                </button>
                            </div>
                        </div>';
			echo '</div>';
		}
	}
}
else
{
	echo '<div class="alert alert-primary" role="alert">
                            <div class="alert-icon"><i class="flaticon-warning"></i></div>
                            <div class="alert-text">Already logged in, redirecting...</div>
                        </div>';
	echo "<meta http-equiv=\"refresh\" content=\"3;url=index.php\">";
	die();
}
?>
								<form class="kt-form" action="" method="post">
									<div class="input-group">
										<input class="form-control" type="text" placeholder="Enter your Username" name="username">
									</div>
									<div class="input-group">
										<input class="form-control" type="password" placeholder="Enter your Password" name="password">
									</div>
									<div class="row kt-login__extra">
										<div class="col">
											<label class="kt-checkbox">
												<input type="checkbox" name="remember_me" value="true"> Remember me
												<span></span>
											</label>
										</div>
									</div>
									<div class="kt-login__actions">
										<button id="kt_login_signin_submit" class="btn btn-brand btn-pill kt-login__btn-primary" name="loginBtn" type="submit">Login</button>
									</div>
								</form>
								<div class="kt-login__account">
					&nbsp;&nbsp;
					<a href="https://hzgaming.net" id="kt_login_signup" class="kt-login__account-link"><u>Back to Home</u></a>
				</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- end:: Page -->

		<!-- begin::Global Config(global config for global JS sciprts) -->
		<script>
			var KTAppOptions = {
				"colors": {
					"state": {
						"brand": "#5d78ff",
						"dark": "#282a3c",
						"light": "#ffffff",
						"primary": "#5867dd",
						"success": "#34bfa3",
						"info": "#36a3f7",
						"warning": "#ffb822",
						"danger": "#fd3995"
					},
					"base": {
						"label": [
							"#c5cbe3",
							"#a1a8c3",
							"#3d4465",
							"#3e4466"
						],
						"shape": [
							"#f0f3ff",
							"#d9dffa",
							"#afb4d4",
							"#646c9a"
						]
					}
				}
			};
		</script>

		<!-- end::Global Config -->

		<!--begin::Global Theme Bundle(used by all pages) -->
		<script src="assets/plugins/global/plugins.bundle.js" type="text/javascript"></script>
		<script src="assets/js/scripts.bundle.js" type="text/javascript"></script>

		<!--end::Global Theme Bundle -->

		<!--begin::Page Scripts(used by this page) -->


		<!--end::Page Scripts -->
	</body>

	<!-- end::Body -->
</html>