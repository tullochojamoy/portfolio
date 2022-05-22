import Link from 'next/link';

export default function NotFound() {
    return (
  <div className="u-body u-xl-mode">
    <section className="u-align-center u-clearfix u-section-10" id="carousel_5c12">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h2 className="u-custom-font u-text u-text-palette-1-base u-text-1">We lost this page</h2>
        <p className="u-text u-text-palette-1-dark-1 u-text-2">We searched high and low but couldn’t find what you’re looking for. Let’s find a better place for you to go.<br/>
        </p>
        <Link href="/">
          <a className="u-active-palette-1-base u-btn u-button-style u-hover-palette-1-base u-palette-2-base u-text-active-white u-text-body-alt-color u-text-hover-white u-btn-1">Go to Homepage</a>
        </Link>
        <img className="u-image u-image-contain u-image-default u-image-1" src="/images/vcvv.jpg" alt="" data-image-width="1298" data-image-height="598"/>
      </div>
    </section>
  </div>
    );
}