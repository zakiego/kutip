module.exports = {
  purge: {
    enabled: false,
    content : ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
  },
   darkMode: false, // or 'media' or 'class'
   theme: {

    extend: {
       colors: {
         'white-blue' : '#F9FAFE',
         'polar-night-bold' : '#2E3440',
         'polar-night-normal' : '#3B4252',
         'frost-bold' : '#5E81AC',
         'frost-normal' : '#88C0D0',
         'snow-storm' : '#ECEFF4',
         'low' : '#D8DEE9',
         'aurora-orange' : '#D08770',
         'aurora-yellow' : '#EBCB8B'
       },
        dropShadow: {
          '3xl': '0 4px 4px rgba(12, 144, 176, 0.20)'
        },
        height: {
          '3xl': '828px',
          '4xl': '1080px'
        },
        width: {
          '3xl': '828px',
          '4xl' : '1080px'
        },
        fontFamily: {
          'twitter' : 'Helvetica'
        },
        textColor: {
          'twitter' : '#0F1419',
          'twitter-username' : '#536471'
        },
        borderRadius: {
          twitter: '63px'
        },
        fontSize : {
          'twitter-text': ['34.3px', {
            letterSpacing: '0em',
            lineHeight: '50px',
          }],
        },
        boxShadow : {
          smooth: '0px 16px 40px 0px rgba(12, 55, 66, 0.20)'
        }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }