const breakpoints = {
    'sm': 320,
    'md': 768,
    'lg': 1440,
}

const sizes = {
    'mobile': `@media screen and (min-width: ${breakpoints.sm}px)`,
    'tablet': `@media screen and (min-width: ${breakpoints.md}px)`, 
    'desktop': `@media screen and (min-width: ${breakpoints.lg}px)`, 
}

export default sizes;