function showAlert() {
    Swal.fire({
        title: 'Para sa aking Ligaya',
        text:'Mahal na mahal kita. Palagi.',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("heart.gif")
          left top
          no-repeat
        `
      })
}