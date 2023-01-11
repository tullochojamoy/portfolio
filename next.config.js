module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://tulloch.nicepage.io',
        permanent: true
      },
      {
        source: '/about',
        destination: 'https://tulloch.nicepage.io/About.html',
        permanent: true
      },
      {
        source: '/resume',
        destination: 'https://tulloch.nicepage.io/Resume.html',
        permanent: true
      },
      {
        source: '/contact',
        destination: 'https://tulloch.nicepage.io/Contact.html',
        permanent: true
      }
    ];
  }
};
