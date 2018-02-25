var url;
var word;

// extension button is pushed
safari.application.addEventListener('command', function(event) {
    if (event.command != 'wordstock') {
        return;
    }

    url = event.target.browserWindow.activeTab.url;

    if (window.getSelection) {
        //send message to injected script
        safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('get_selection');
    }
}, false);

// highlighted word is fetched
safari.application.addEventListener('message', function(msg) {
    if(msg.name != 'selected_text') {
        return;
    }

    // get word
    word = msg.message;
    // show popover
    document.getElementById('input_word').value = word;
    safari.extension.toolbarItems[0].showPopover();
}, false);

// OK button is clicked
var ok_button = document.getElementById('btn-ok')
ok_button.addEventListener( "click" , function () {
  // update word
  word = document.getElementById('input_word').value;
  // write to db
  writeData(word, url);
  // dismiss popover
  safari.self.hide();
} , false );

// Cancel button is clicked
var cancel_button = document.getElementById('btn-cancel')
cancel_button.addEventListener( "click" , function () {
  // dismiss popover
  safari.self.hide();
} , false );
