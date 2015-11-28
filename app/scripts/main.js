console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});