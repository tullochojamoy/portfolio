import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

export default function Contact() {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        'service_iawyxzq',
        'template_50aeeq8',
        //form.current,
        e.target,
        'PseEQBHnelIgkbVIi'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      //e.target.reset();
      showResult(true);
  };

  return (
    <section className='u-clearfix u-grey-5 u-section-51' id='carousel_3730'>
      <div className='u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1'>
        <div className='u-gutter-0 u-layout'>
          <div className='u-layout-row'>
            <div
              className='u-align-left u-container-style u-image u-layout-cell u-size-30 u-image-1'
              data-image-width='1600'
              data-image-height='1600'
            >
              <div className='u-container-layout u-container-layout-1'></div>
            </div>
            <div className='u-align-left u-container-style u-layout-cell u-palette-5-dark-3 u-size-30 u-layout-cell-2'>
              <div className='u-container-layout u-container-layout-2'>
                <h2 className='u-custom-font u-font-oswald u-text u-text-body-alt-color u-text-1'>
                  contact form
                </h2>
                <div className='u-expanded-width u-form u-form-1'>
                  <center>{result ? 'Message sent' : null}</center>
                  <form
                    className='u-block-5bf7-21 u-clearfix u-form-spacing-40 u-form-vertical u-inner-form'
                    onSubmit={sendEmail}
                  >
                    <div className='u-form-group u-form-name u-form-group-1'>
                      <label
                        htmlFor='name-e4cc'
                        className='u-form-control-hidden u-label u-text-body-alt-color'
                        wfd-invisible='true'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        placeholder='Enter your Name'
                        name='from_name'
                        className='u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle u-text-body-alt-color'
                        required
                      />
                    </div>
                    <div className='u-form-email u-form-group u-form-group-2'>
                      <label
                        htmlFor='email-e4cc'
                        className='u-form-control-hidden u-label u-text-body-alt-color'
                        wfd-invisible='true'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        placeholder='Enter a valid email address'
                        //id='email-e4cc'
                        //name='email'
                        name='reply_to'
                        className='u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle u-text-body-alt-color'
                        required
                      />
                    </div>
                    <div className='u-form-group u-form-message u-form-group-3'>
                      <label
                        htmlFor='message-e4cc'
                        className='u-form-control-hidden u-label u-text-body-alt-color'
                        wfd-invisible='true'
                      >
                        Message
                      </label>
                      <textarea
                        placeholder='Enter your message'
                        rows='4'
                        cols='50'
                        //id='message-e4cc'
                        name='message'
                        className='u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle u-text-body-alt-color'
                        required
                      ></textarea>
                    </div>
                    <div className='u-form-agree u-form-group u-form-group-4'>
                      <input
                        type='checkbox'
                        id='agree-925e'
                        name='agree'
                        className='u-agree-checkbox'
                        required
                      />
                      <label
                        htmlFor='agree-925e'
                        className='u-label u-text-body-alt-color'
                      >
                        I accept the&nbsp;
                        <Link href='/terms'>
                          <a className='u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1'>
                            Terms of Service
                          </a>
                        </Link>
                      </label>
                    </div>
                    <div className='u-form-group u-form-submit u-form-group-5'>
                      <button
                        type='submit'
                        className='u-border-2 u-border-white u-btn u-btn-submit u-button-style u-none u-text-body-alt-color u-text-hover-white u-btn-2'
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
