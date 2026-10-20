// Le HTML est en anglais (langue par défaut) ; seul le français est traduit ici.
const locales = {
  fr: {
    translation: {
      meta: {
        title: 'StreamCat : partage ta console, avec le son',
        description:
          "StreamCat affiche l'image et le son de ta carte de capture dans une fenêtre propre que tu partages où tu veux. Pour Mac et Windows.",
      },
      menu: { open: 'Ouvrir le menu', close: 'Fermer le menu' },
      nav: { features: 'Fonctions', how: "Mode d'emploi", download: 'Télécharger' },
      hero: {
        l1: 'Partage',
        l2: 'ta console,',
        l3: 'avec le son.',
        lede: "StreamCat affiche l'image et le son de ta carte de capture dans une fenêtre propre. Tu la partages comme n'importe quelle fenêtre, où tu veux.",
        mac: 'Télécharger pour Mac',
        win: 'Pour Windows',
        live: 'En direct, son activé',
        mock: 'Fenêtre StreamCat affichant une partie de jeu, avec sa barre de contrôle flottante',
      },
      features: {
        title: 'Ce que StreamCat change pour toi',
        intro: 'Plus besoin de monter un studio pour montrer ta partie. Tout ce qui compte tient dans une seule fenêtre.',
      },
      sheet: { resolution: 'Résolution', fps: 'Images par seconde' },
      a: { title: 'Image 1080p à 60 images par seconde', text: "Ton jeu arrive tel qu'il s'affiche sur la console, fluide, sans passer par OBS." },
      b: { title: 'Le son de la console, pas celui de la pièce', text: 'Stéréo, sans réducteur de bruit ni gain automatique : le son du jeu reste intact.' },
      c: {
        title: 'Une fenêtre sans rien autour',
        text: "Pas de barre de titre. Les contrôles s'effacent dès que tu ne bouges plus la souris, les autres ne voient que le jeu.",
      },
      flow: { s0: 'Capture débranchée', s1: 'Ouverture de la capture', s2: "L'image est de retour" },
      d: {
        title: 'Ça reprend tout seul',
        text: "Tu débranches puis rebranches la capture : StreamCat revient à l'image sans que tu touches à rien. Tes réglages sont retenus d'un lancement à l'autre.",
      },
      how: {
        title: 'Trois gestes, et ta console est partagée',
        s1: { title: 'Branche et ouvre', text: "Branche ta carte de capture en USB, lance ta console, puis ouvre StreamCat. L'image apparaît toute seule." },
        s2: { title: 'Partage la fenêtre', text: "Dans ton outil de partage d'écran (Discord, par exemple), choisis la fenêtre « StreamCat » dans la liste." },
        s3: { title: 'Garde le son activé', text: 'Vérifie que le partage du son est activé avant de lancer. Les autres voient et entendent ta partie.' },
      },
      dl: {
        title: 'Télécharge StreamCat',
        lede: 'Choisis ton système, installe, et ta première partie est prête à partager.',
        mac: { sub: 'Puces Apple et Intel', arm: 'Puce Apple' },
        win: { sub: 'Installeur 64 bits', btn: "Télécharger l'installeur" },
      },
    },
  },
}
