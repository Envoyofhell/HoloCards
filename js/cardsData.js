// Define cards data
const cardsData = [
    {
        name: 'Primal_KyogreEX',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Fprimal-kyogre-flo08qc%2Fcltj3n0fh000w358drpt5dz0y.png&w=640&q=75',
        color1: '#fac',
        color2: '#ddccaa',
        overlay1: 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c938f85-f834-4bb3-b3b2-97d295769464/ddlel40-8c1dfcfb-a614-4a47-a1dc-01ee32fd95c9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjOTM4Zjg1LWY4MzQtNGJiMy1iM2IyLTk3ZDI5NTc2OTQ2NFwvZGRsZWw0MC04YzFkZmNmYi1hNjE0LTRhNDctYTFkYy0wMWVlMzJmZDk1YzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kvKOOwAgC9Aiihevik1HFy7dH2hCMSCT7Y9R7722IBw")',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: .5,
        overlayOpacity2: .25
    },
    {
        name: 'Primal_GroudonEX',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Fprimal-groudon-f0104p7%2Fcltj3jueb000u358dfchu6rpo.png&w=640&q=75',
        color1: '#54a29e',
        color2: '#a79d66',
        overlay1: 'url(https://craftcuttersupply.com/cdn/shop/products/holo_glitter_pink.jpg?v=1535979741)',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: .5,
        overlayOpacity2: .25
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
        name: 'Crystal_Cave',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2Fjasonah93%2Fcrystal-cave-hs60axl%2Fclt3cbo110008356p2d6p511u.png&w=640&q=75',
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
        name: 'Celebi',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Fcelebi-ji30rtz%2Fcltj1zkjr000o358dxqn6pxah.png&w=640&q=75',
        color1: '#efb2fb',
        color2: '#acc6f8',
        overlay1: 'url(https://assets.codepen.io/13471/holo.png)',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: '40%',
        overlayOpacity2: '20%'
    },
    {
        name: 'Mew',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Fmew-xgm08up%2Fcltj3b4xg000s358dey95cs20.png&w=640&q=75',
        color1: '#efb2fb',
        color2: '#acc6f8',
        overlay1: 'url(https://assets.codepen.io/13471/holo.png)',
        overlay2: 'url("https://assets.codepen.io/13471/sparkles.gif")',
        overlayOpacity1: '40%',
        overlayOpacity2: '20%'
    },
    {
        name: 'Mewtwo',
        imgUrl: 'https://pokecardmaker.net/_next/image?url=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fawss3stack-pokecardmakernet2e60dd8b-m25pxfgr8cnl%2FEnvoyOfHell%2Fmewtwo-fz707ls%2Fcltj39bgg000q358dp10gh8sb.png&w=640&q=75',
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
