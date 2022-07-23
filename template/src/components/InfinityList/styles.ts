import { SizesSheet } from '~/lib/size';
import { theme } from '~/lib/theme';

export const styles = SizesSheet.create({
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
});
