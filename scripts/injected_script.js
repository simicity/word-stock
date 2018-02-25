safari.self.addEventListener('message', function(msg) {
	if (window != window.top) {
		// execute only at top level
    	return;
	}
    if (msg.name != 'get_selection') {
    	return;
    }
    var sel = window.getSelection()+'';
    safari.self.tab.dispatchMessage('selected_text', sel);
}, false);
