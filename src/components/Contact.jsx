const Contact = () => {
  let content = {
    recipient: 'raphaelakpor00@gmail.com',
    title: '',
    message: 'Hello Raphael I would like to...',
  };
  return (
    <section className='text-center space-y-7 mb-20'>
      <h2 className='text-3xl md:text-4xl font-bold '>Get In Touch</h2>
      <p className='text-gray-300 md:w-4/5 lg:w-1/2 mx-auto'>
        My Inbox is always open. I'm available for collaboration and part-time
        jobs. I'll do my best to get back to you as soon as possible.
      </p>
      <button className='px-6 py-3 rounded-md ring-2 ring-primary duration-200 transition-colors ease-in-out bg-primary font-semibold hover:bg-transparent hover:text-primary'>
        <a
          href={`mailto:${content.recipient}?subject=${content.title}&body=${content.message}`}>
          Say Hello
        </a>
      </button>
    </section>
  );
};

export default Contact;
