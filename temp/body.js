			<header class="w3-top w3-bar MenuBar">
				<span class="w3-bar-item">FIND</span>
				<a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="ShowVmenu()">&#9776;</a>
				<div id="Hmenu">
					<a href="#" class="w3-bar-item w3-button w3-hide-small" onclick="displayAllAirplane()">
						<i class="bi bi-airplane-fill"></i>
						<span class="w3-hide-medium">顯示全部飛機</span>
					</a>
					<a href="#" class="w3-bar-item w3-button w3-hide-small" onclick="showInfo()">
						<i class="bi bi-pencil-square"></i>
						<span class="w3-hide-medium">更改遊戲設定</span>
					</a>
					<a href="#" class="w3-bar-item w3-button w3-hide-small" onclick="location.reload()">
						<i class="bi bi-recycle"></i>
						<span class="w3-hide-medium">重新開始</span>
					</a>
				</div>
				<div id="Vmenu" class="w3-bar-block w3-hide w3-hide-large w3-hide-medium">
					<a href="#" class="w3-bar-item w3-button" onclick="displayAllAirplane()">
						<i class="bi bi-airplane-fill"></i>
						<span class="w3-hide-medium">顯示全部飛機</span>
					</a>
					<a href="#" class="w3-bar-item w3-button" onclick="showInfo()">
						<i class="bi bi-pencil-square"></i>
						<span class="w3-hide-medium">更改遊戲設定</span>
					</a>
					<a href="#" class="w3-bar-item w3-button" onclick="location.reload()">
						<i class="bi bi-recycle"></i>
						<span class="w3-hide-medium">重新開始</span>
					</a>
				</div>
			</header>

      <div id="playground" class="w3-display-container">
        <table
          id="airport"
          class="w3-display-middle w3-table w3-centered"></table>
      </div>

      <div
        id="alertDiv"
        class="HiddenPopupInfo HiddenPopupInfo-M w3-container w3-center w3-round-xxlarge">
        <i
          class="Btn-Close bi bi-x-circle-fill"
          onclick="CloseHiddenPopupInfo()"></i>
        <div id="alertTitle" class="w3-container w3-large"></div>
        <div id="alertContent" class="w3-container w3-medium"></div>
        <div id="alertAction" class="w3-container w3-medium"></div>
      </div>
			
			<footer class="w3-container w3-bottom w3-margin-top w3-right MenuBar">
				<span class="w3-right">@Freda Wong</span>
			</footer>