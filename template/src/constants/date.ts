export const DATE_PATTERN = {
  /**
   * 03 Nov
   */
  DAY_MONTH: 'dd MMM',

  /**
   * Mo, 30 November
   */
  WEEK_DAY_MONTH: 'iiiiii, d MMMM',

  /**
   * 12:53
   */
  TIME: 'HH:mm',

  /**
   *  30 oct. 2020
   **/
  SHORT_MONTH: 'dd MMM yyyy',

  /**
   *  2000-12-25
   **/
  DATE_STRING: 'yyyy-MM-dd',

  /**
   *  30.12.2020
   **/
  DATE_DOTTED: 'dd.MM.yyyy',

  /**
   *  30.12
   **/
  DAY_MONTH_DOTTED: 'dd.MM',

  /**
   * 30
   **/
  DAY: 'dd',

  /**
   * 30 December 2020
   */
  DAY_FULL_MONTH_YEAR: 'dd MMMM yyyy',

  /**
   * Mo, 30 November 2020, 19:00
   **/
  FULL_DATE: 'iiiiii, dd MMMM yyyy, HH:mm',

  /**
   * Mo, 30 November, 19:00
   **/
  FULL_DATE_OMIT_YEAR: 'iiiiii, dd MMMM, HH:mm',

  /**
   *  30 December
   **/
  DAY_MONTH_NAME: 'dd MMMM',

  /**
   * 2020-12-19T12:53:49.049Z
   */
  ISO: `yyyy-MM-dd'T'HH:mm:ss.sss'Z'`,

  /**
   * 2020-12-19T12:53
   */
  ISO_DATE_TIME: `yyyy-MM-dd'T'HH:mm`,
} as const
