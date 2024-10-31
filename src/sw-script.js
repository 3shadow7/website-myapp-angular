
if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js',{
    scope:'/'
  }).then(registration => console.log('hi there ..',registration))
}
