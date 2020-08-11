import {createStyles, makeStyles} from '@material-ui/core';

export function useStyles<T extends object>(styles: T): Record<keyof T, string> {
  return (makeStyles(() => createStyles(styles)) as unknown) as Record<keyof T, string>;
}
