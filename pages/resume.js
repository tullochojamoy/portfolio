import Link from 'next/link';

export default function Resume() {
  return (
    <>
      <section className='u-clearfix u-section-31' id='sec-1835'>
        <div className='u-clearfix u-sheet u-sheet-1'></div>
      </section>
      <section
        className='u-clearfix u-color-scheme-u10 u-color-style-multicolor-1 u-palette-1-base u-section-32'
        id='sec-7ed4'
      >
        <div className='u-clearfix u-sheet u-sheet-1'>
          <div className='u-clearfix u-layout-wrap u-layout-wrap-1'>
            <div className='u-layout'>
              <div className='u-layout-row'>
                <div className='u-align-left u-container-style u-layout-cell u-left-cell u-size-42 u-layout-cell-1'>
                  <div className='u-container-layout u-valign-middle u-container-layout-1'>
                    <h3 className='u-custom-font u-font-ubuntu u-text u-text-1'>
                      Contact Me today
                    </h3>
                  </div>
                </div>
                <div className='u-align-left u-container-style u-layout-cell u-right-cell u-size-18 u-layout-cell-2'>
                  <div className='u-container-layout u-valign-middle u-container-layout-2'>
                    <Link href='/contact'>
                      <a className='u-border-2 u-border-hover-palette-1-light-2 u-border-white u-btn u-button-style u-none u-btn-1'>
                        Next&nbsp;
                        <span className='u-icon u-text-white'>
                          <svg
                            className='u-svg-content'
                            viewBox='0 0 512 512'
                            x='0px'
                            y='0px'
                            style={{ width: '1em', height: '1em' }}
                          >
                            <path d='M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068 c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557 l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104 c0.006-.006,0.011-.013,0.018-.019C513.968,262.339,513.943,249.635,506.134,241.843z'></path>
                          </svg>
                          <img />
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
