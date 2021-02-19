const errorCardStyles = {
  errorBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: `100%`,
  },
  errorContainer: {
    height: `100vh`,
  },
};

const sharedCaseErrorCardStyles = {
  homeButton: {
    marginTop: 20,
    color: 'green',
  },
};
const notFoundErrorCardStyles = sharedCaseErrorCardStyles;
const unexpectedErrorCardStyles = sharedCaseErrorCardStyles;

export { errorCardStyles, notFoundErrorCardStyles, unexpectedErrorCardStyles };
