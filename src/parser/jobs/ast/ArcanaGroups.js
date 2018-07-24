import ACTIONS from 'data/ACTIONS'
import STATUSES from 'data/STATUSES'
// Grouped cards for future convenience - whatever processing desired
// For Royal Road calculation other than expanded, refer to /core/modules/arcanum.js


/* Grouped actions */

export const ARCANA_USE = [
	ACTIONS.THE_BALANCE.id,
	ACTIONS.THE_BOLE.id,
	ACTIONS.THE_ARROW.id,
	ACTIONS.THE_SPEAR.id,
	ACTIONS.THE_EWER.id,
	ACTIONS.THE_SPIRE.id,
	ACTIONS.THE_BALANCE_FROM_SPREAD.id,
	ACTIONS.THE_BOLE_FROM_SPREAD.id,
	ACTIONS.THE_ARROW_FROM_SPREAD.id,
	ACTIONS.THE_SPEAR_FROM_SPREAD.id,
	ACTIONS.THE_EWER_FROM_SPREAD.id,
	ACTIONS.THE_SPIRE_FROM_SPREAD.id,
]

export const EXPANDED_ARCANA_USE = [
	ACTIONS.THE_BALANCE_EXPANDED.id,
	ACTIONS.THE_BOLE_EXPANDED.id,
	ACTIONS.THE_ARROW_EXPANDED.id,
	ACTIONS.THE_SPEAR_EXPANDED.id,
	ACTIONS.THE_EWER_EXPANDED.id,
	ACTIONS.THE_SPIRE_EXPANDED.id,
	ACTIONS.THE_BALANCE_EXPANDED_FROM_SPREAD.id,
	ACTIONS.THE_BOLE_EXPANDED_FROM_SPREAD.id,
	ACTIONS.THE_ARROW_EXPANDED_FROM_SPREAD.id,
	ACTIONS.THE_SPEAR_EXPANDED_FROM_SPREAD.id,
	ACTIONS.THE_EWER_EXPANDED_FROM_SPREAD.id,
	ACTIONS.THE_SPIRE_EXPANDED_FROM_SPREAD.id
]

/* Single target usage */

export const BALANCE_USED = [
	ACTIONS.THE_BALANCE.id,
	ACTIONS.THE_BALANCE_FROM_SPREAD.id,
]

export const BOLE_USED = [
	ACTIONS.THE_BOLE.id,
	ACTIONS.THE_BOLE_FROM_SPREAD.id,
]

export const ARROW_USED = [
	ACTIONS.THE_ARROW.id,
	ACTIONS.THE_ARROW_FROM_SPREAD.id,
]

export const SPEAR_USED = [
	ACTIONS.THE_SPEAR.id,
	ACTIONS.THE_SPEAR_FROM_SPREAD.id,
]

export const EWER_USED = [
	ACTIONS.THE_EWER.id,
	ACTIONS.THE_EWER_FROM_SPREAD.id,
]

export const SPIRE_USED = [
	ACTIONS.THE_SPIRE.id,
	ACTIONS.THE_SPIRE_FROM_SPREAD.id,
]


/* Arcana spread states */

export const HELD_ARCANA = [
	STATUSES.BALANCE_HELD.id,
	STATUSES.BOLE_HELD.id,
	STATUSES.ARROW_HELD.id,
	STATUSES.SPEAR_HELD.id,
	STATUSES.EWER_HELD.id,
	STATUSES.SPIRE_HELD.id
]

export const DRAWN_ARCANA = [
	STATUSES.BALANCE_DRAWN.id,
	STATUSES.BOLE_DRAWN.id,
	STATUSES.ARROW_DRAWN.id,
	STATUSES.SPEAR_DRAWN.id,
	STATUSES.EWER_DRAWN.id,
	STATUSES.SPIRE_DRAWN.id
]

