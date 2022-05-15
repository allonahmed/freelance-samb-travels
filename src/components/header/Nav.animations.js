const sideAnimation = (width) => {
  return {
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
        delay: () => {
          return width > 800 ? 2 : 0;
        },
        duration: 0.5
      },

      width: width,
      height: "calc(100vh)"
    },
    close: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
      },
      width: 0,
      height: 0
    }
  };
};

const linkAnimation = {
  open: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5
    }
  },
  close: {
    opacity: 0
  }
};

const buttonAnimation = {
  open: {
    background: "none",
    boxShadow: "none",
    transition: {
      delay: 0.5,
      duration: 0.5
    }
  },
  close: {
    transition: {
      delay: 1,
      duration: 0.5
    },
    background: "#24957F",
    boxShadow: "0px 0px 8px rgba(255, 255, 255, 1)"
  }
};

export { buttonAnimation, linkAnimation, sideAnimation };
