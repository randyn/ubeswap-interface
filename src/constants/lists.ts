/**
 * @TODO add list from blockchain association
 */
export const UNSUPPORTED_LIST_URLS: string[] = []

const UBESWAP_LIST = 'https://raw.githubusercontent.com/Ubeswap/default-token-list/master/ubeswap.token-list.json'
const UBESWAP_EXPERIMENTAL_LIST =
  'https://raw.githubusercontent.com/Ubeswap/default-token-list/master/ubeswap-experimental.token-list.json'

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  UBESWAP_LIST,
  UBESWAP_EXPERIMENTAL_LIST,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [UBESWAP_LIST]
