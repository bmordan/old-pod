import yo from 'yo-yo'

const items = [
  'Playlists',
  'Browse',
  'Extras',
  'Settings',
  'Backlight'
]

export default () => {
  return yo`<ul class="list tl f-subheadline lh-title mt0">
    ${items.map(function (item) {
      return yo`<li>${item}<span class="fr pr3">›</span></li>`
    })}
  </ul>`
}
