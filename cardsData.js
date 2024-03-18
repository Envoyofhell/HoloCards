// Define cards data
const cardsData = [
    {
        name: 'MewTwo',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Fmewtwo-fz707ls%2Fcltj39bgg000q358dp10gh8sb.png&w=384&q=75',
        color1: '#fac',
        color2: '#ddccaa',
        overlay1: 'url(https://assets.codepen.io/13471/holo.png)',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: '40%',
        overlayOpacity2: '20%'
    },
    {
        name: 'Mew',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Fmew-xgm08up%2Fcltj3b4xg000s358dey95cs20.png&w=750&q=75',
        color1: '#54a29e',
        color2: '#a79d66',
        overlay1: 'url(https://assets.codepen.io/13471/holo.png)',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: '40%',
        overlayOpacity2: '20%'
    },
    {
        name: 'RayquazaEx',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Frayquaza-1t908v0%2Fcltj15o0j000k358d9ajzpngn.png&w=384&q=75',
        color1: '#efb2fb',
        color2: '#acc6f8',
        overlay1: 'url(https://assets.codepen.io/13471/holo.png)',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: '40%',
        overlayOpacity2: '20%'
    },
    {
        name: 'GengarEx',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Fprincess-gengar-1y9081e%2Fclthwbyqt0000356qahd7cz7d.png&w=384&q=75',
        color1: '#efb2fb',
        color2: '#acc6f8',
        overlay1: 'url(https://assets.codepen.io/13471/holo.png)',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: '40%',
        overlayOpacity2: '20%'
    },
    {
        name: 'FeebasEX',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Ffeebas-dc606iy%2Fcltizqvcp0007358d2rdkxx8e.png&w=384&q=75',
        color1: '#fac',
        color2: '#ddccaa',
        overlay1: 'url(https://assets.codepen.io/13471/holo.png)',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: '40%',
        overlayOpacity2: '20%'
    },
    {
        name: 'MiloticEX',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Fmilotic-bta06t4%2Fcltizx2aj0009358dp8bw6n97.png&w=384&q=75',
        color1: '#54a29e',
        color2: '#a79d66',
        overlay1: 'url(https://assets.codepen.io/13471/holo.png)',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: '40%',
        overlayOpacity2: '20%'
    },
    {
        name: 'MagikarpEx',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Fmagikarp-6w10450%2Fcltiyl84f0000358dduwwc6uq.png&w=384&q=75',
        color1: '#efb2fb',
        color2: '#acc6f8',
        overlay1: 'url(https://assets.codepen.io/13471/holo.png)',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: '40%',
        overlayOpacity2: '20%'
    },
    {
        name: 'GyaradosEX',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Fgyarados-9r304b9%2Fcltiyzg7x0002358dhahb8zip.png&w=384&q=75',
        color1: '#efb2fb',
        color2: '#acc6f8',
        overlay1: 'url(https://assets.codepen.io/13471/holo.png)',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: '40%',
        overlayOpacity2: '20%'
    },
    {
        name: 'Dratini',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Fdratini-8l108es%2Fcltj0gl85000c358droyrjuir.png&w=384&q=75',
        color1: '#fac',
        color2: '#ddccaa',
        overlay1: 'url(https://assets.codepen.io/13471/holo.png)',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: '40%',
        overlayOpacity2: '20%'
    },
    {
        name: 'Dragonair',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Fdragonair-jy408gj%2Fcltj0mvk6000e358df8ca8c82.png&w=384&q=75',
        color1: '#54a29e',
        color2: '#a79d66',
        overlay1: 'url(https://assets.codepen.io/13471/holo.png)',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: '40%',
        overlayOpacity2: '20%'
    },
    {
        name: 'Dragonite',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Fdragonite-c0608yg%2Fcltj0wpbq000h358de99lvire.png&w=384&q=75',
        color1: '#efb2fb',
        color2: '#acc6f8',
        overlay1: 'url(https://assets.codepen.io/13471/holo.png)',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: '40%',
        overlayOpacity2: '20%'
    },
    {
        name: 'mewtwo',
        imgUrl: 'https://assets.codepen.io/13471/mewtwo-gx.webp',
        color1: '#efb2fb',
        color2: '#acc6f8',
        overlay1: 'url(https://assets.codepen.io/13471/holo.png)',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: '40%',
        overlayOpacity2: '20%'
    }
];

// Export cards data array
export default cardsData;
