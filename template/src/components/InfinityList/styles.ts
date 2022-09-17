import { createStyles } from '~/lib/theme';

export const useStyles = createStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.transparent,
  },
  contentContainer: {
    flexGrow: 1,
  },
  bottomActivityIndicator: {
    marginTop: 30,
    marginVertical: 16,
  },
}));
