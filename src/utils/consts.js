export const MAIN_ROUTE = '/'
export const SERVICES_ROUTE = '/services'
export const PROJECTS_ROUTE = '/projects'
export const PRICING_ROUTE = '/pricing'
export const ANALYSIS_ROUTE = '/analysis'

export const textLeftAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

export const textRightAnimation = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

export const textTopAnimation = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}