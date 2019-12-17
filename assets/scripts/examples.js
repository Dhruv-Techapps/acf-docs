window.onload = _ => {
  $(document).on("click", "#copy-to-clipboard", e => {
    let url = e.currentTarget.parentNode.getAttribute("data-url");
    fetch(url).then(r => r.json()).then(example => {
      var input = document.createElement('input');
      input.setAttribute('value', JSON.stringify(example));
      document.body.appendChild(input);
      input.select();
      var result = document.execCommand('copy');
      document.body.removeChild(input);
      return result;
    });
  });
  if (window.extension_installed) {
    $("#add-to-extension").show();
    $(document).on("click", "#add-to-extension", e => {
      let url = e.currentTarget.parentNode.getAttribute("data-url");
      fetch(url).then(r => r.json()).then(example => {
        window.chrome.runtime.sendMessage(window.apiKey, { action: "addUpdateConfig", config: example });
      });
    });
  } else {
    console.info("api key not avaiable");
  }
}