// Apparition des blocs au défilement (IntersectionObserver, pas d'écoute du scroll).
const io = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.classList.add('in')
      io.unobserve(entry.target)
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
)
document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

// Menu mobile : le burger se transforme en croix et ouvre le panneau.
const body = document.body
const burger = document.getElementById('burger')
function setMenu(open) {
  body.classList.toggle('menu-open', open)
  burger.setAttribute('aria-expanded', open)
  burger.setAttribute('aria-label', t(open ? 'menu.close' : 'menu.open', open ? 'Close menu' : 'Open menu'))
}
burger.addEventListener('click', () => setMenu(!body.classList.contains('menu-open')))
document.querySelectorAll('#overlay a').forEach((a) => a.addEventListener('click', () => setMenu(false)))
document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false))

// Langue : anglais par défaut (texte du HTML), français si le navigateur est en français.
const lng = navigator.language.startsWith('fr') ? 'fr' : 'en'
i18next.init({ lng, resources: locales, initAsync: false })
const t = (key, fallback) => i18next.t(key, { defaultValue: fallback })

if (lng === 'fr') {
  document.documentElement.lang = 'fr'
  document.title = t('meta.title')
  document.querySelector('meta[name="description"]').content = t('meta.description')
  document.querySelectorAll('[data-i18n]').forEach((el) => (el.textContent = t(el.dataset.i18n)))
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria)))
}
