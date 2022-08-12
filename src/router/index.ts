const routerA = {
  title: '', // document.title
  path: '', // location.pathname
  menu: {
    header: true,
    footer: true,
    left: true,
    right: true
  }
}

const getRouteURL = (router: {title: string, path: string, menu?: Record<string, boolean>}) => {
  const baseURL = router.path
  if (router.menu) {
    // Object.keys(router.menu).map((key: string) => {
    //   switch (key) {
    //     case 'hh':
    //       showHeader = false
    //       break
    //     case 'sh':
    //       showHeader = true
    //       break
    //     case 'hf':
    //       showFooter = false
    //       break
    //     case 'sf':
    //       showFooter = true
    //       break
    //     case 'sl':
    //       showSide = true
    //       showRight = true
    //       break
    //     case 'hl':
    //       showSide = false
    //       break
    //     case 'sr':
    //       showRight = true
    //       break
    //     case 'hr':
    //       showRight = false
    //       break
    //     case 'himmersion':
    //       showHeader = false
    //       showFooter = false
    //       showSide = false
    //       showRight = false
    //       break
    //     default:
    //   }
    // })
  }
}

getRouteURL(routerA)

export {}