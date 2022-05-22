import Link from 'next/link';

export default function Footer() {
    function scrollClickHandler() {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
    }

  return (
    <footer
      className='u-align-center-md u-align-center-sm u-align-center-xs u-clearfix u-footer u-grey-80'
      id='sec-9024'
    >
      <div className='u-clearfix u-sheet u-sheet-1'>
        <span
          onClick={scrollClickHandler}
          className='u-file-icon u-icon u-text-white u-icon-1'
        >
          <img src='/images/2.png' alt='' />
        </span>
        <Link href='/'>
          <a
            className='u-image u-logo u-image-1'
            data-image-width='80'
            data-image-height='40'
          >
            <img
              src='/images/default-logo-3.png'
              className='u-logo-image u-logo-image-1'
            />
          </a>
        </Link>
        <div className='u-align-left u-social-icons u-spacing-10 u-social-icons-1'>
          <Link href='https://www.linkedin.com/in/jamoytulloch/' passHref>
            <a
              className='u-social-url'
              title='linkedin'
              target='_blank'
              rel='noreferrer'
            >
              <span className='u-icon u-social-icon u-social-linkedin u-icon-2'>
                <svg
                  className='u-svg-link'
                  preserveAspectRatio='xMidYMin slice'
                  viewBox='0 0 112 112'
                >
                  <use
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    xlinkHref='#svg-d671'
                  ></use>
                </svg>
                <svg
                  className='u-svg-content'
                  viewBox='0 0 112 112'
                  x='0'
                  y='0'
                  id='svg-d671'
                >
                  <circle
                    fill='currentColor'
                    cx='56.1'
                    cy='56.1'
                    r='55'
                  ></circle>
                  <path
                    fill='#FFFFFF'
                    d='M41.3,83.7H27.9V43.4h13.4V83.7z M34.6,37.9L34.6,37.9c-4.6,0-7.5-3.1-7.5-7c0-4,3-7,7.6-7s7.4,3,7.5,7
                    C42.2,34.8,39.2,37.9,34.6,37.9z M89.6,83.7H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5
                    H48.7c0,0,0.2-36.5,0-40.3h13.4v5.7c1.8-2.7,5-6.7,12.1-6.7c8.8,0,15.4,5.8,15.4,18.1V83.7z'
                  ></path>
                </svg>
              </span>
            </a>
          </Link>
        </div>
        <center>
          <span
            onClick={scrollClickHandler}
            className='u-align-center-lg u-align-center-md u-align-center-xl u-text u-text-1'
          >
            BACK TO TOP
          </span>
        </center>
      </div>
    </footer>
  );
}