
<?php
$string = "none";

class player
{
   

   /*

    Checks for a User's Administrator status, Returning Bool.

  */
	function isAdmin($odb)
	{
		$SQL = $odb -> prepare("SELECT `adminlevel` FROM `players` WHERE `uid` = :id");
		$SQL -> execute(array(':id' => $_SESSION['ID']));
		$rank = $SQL -> fetchColumn(0);
		if ($rank > 1)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
  /*

    isAdminGreaterThan -> Level

  */

  function isAdminGreaterThan($odb, $level)
  {
    $SQL = $odb -> prepare("SELECT `adminlevel` from `players` WHERE `uid` = :id");
    $SQL -> execute(array(':id' => $_SESSION['ID']));
    $rank = $SQL -> fetchColumn(0);
    if ($rank >= $level)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  /*

    Checks if a user is logged in, Returning Bool.

  */
	function LoggedIn()
	{
		@session_start();
		if (isset($_SESSION['username']))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

  function isInGang($odb)
  {
    $SQL = $odb -> prepare("SELECT `gang` FROM `players` WHERE `uid` = :id");
    $SQL -> execute(array(':id' => $_SESSION['ID']));
    $gangStatus = $SQL -> fetchColumn(0);
    if ($gangStatus > 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  function isGangLeader($odb)
  {
    $SQL = $odb -> prepare("SELECT `rank` FROM `players` WHERE `uid` = :id");
    $SQL -> execute(array(':id' => $_SESSION['ID']));
    $gangLeaderStatus = $SQL -> fetchColumn(0);
    if ($gangLeaderStatus >= 5)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
 
function getAdminRankName($odb){
    switch($odb)
	{
	    case 1: $string = "Secret Admin";
	    case 2: $string = "Junior Admin";
	    case 3: $string = "General Admin";
		case 4: $string = "Senior Admin";
		case 5: $string = "Head Admin";
		case 6: $string = "Assistant Management";
		case 7: $string = "Management";
	}
    return $string;                          
}
  function isInFaction($odb)
  {
    $SQL = $odb -> prepare("SELECT `faction` FROM `players` WHERE `uid` = :id");
    $SQL -> execute(array(':id' => $_SESSION['ID']));
    $factionStatus = $SQL -> fetchColumn(0);
    if ($factionStatus > 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  function isFactionLeader($odb)
  {
    $SQL = $odb -> prepare("SELECT `leader` FROM `players` WHERE `uid` = :id");
    $SQL -> execute(array(':id' => $_SESSION['ID']));
    $factionLeaderStatus = $SQL -> fetchColumn(0);
    if ($factionLeaderStatus == 1)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  function LogCP($odb, $executer, $desc)
  {
    $SQL = $odb -> prepare("INSERT INTO `log_cp` (executer, description) VALUES (?,?)");
    $SQL->execute(array($executer, $desc));
  }
}
class statistics
{
  function getTotalUserCount($odb)
  {
    $SQL = $odb -> query("SELECT count(*) FROM `players`");
    return $SQL -> fetchColumn(0);    
  }

  function getTotalAdminCount($odb)
  {
    $SQL = $odb -> query("SELECT count(*) FROM `players` WHERE `adminlevel` > 1");
    return $SQL -> fetchColumn(0);    
  }
  function getTotalEntrances($odb)
  {
    $SQL = $odb -> query("SELECT count(*) FROM `entrances`");
    return $SQL -> fetchColumn(0);    
  }
  function getTotalHouses($odb)
  {
    $SQL = $odb -> query("SELECT count(*) FROM `houses`");
    return $SQL -> fetchColumn(0);    
  }
  function getTotalBiz($odb)
  {
    $SQL = $odb -> query("SELECT count(*) FROM `businesses`");
    return $SQL -> fetchColumn(0);    
  }
  function getTotalBannedCount($odb)
  {
    $SQL = $odb -> query("SELECT count(*) FROM `bans`");
    return $SQL -> fetchColumn(0);    
  }
  function getTotalLands($odb)
  {
    $SQL = $odb -> query("SELECT count(*) FROM `lands`");
    return $SQL -> fetchColumn(0);    
  }

  function getTotalVIPCount($odb)
  {
    $SQL = $odb -> query("SELECT count(*) FROM `players` WHERE `donator` > 0");
    return $SQL -> fetchColumn(0);    
  }
}
?>