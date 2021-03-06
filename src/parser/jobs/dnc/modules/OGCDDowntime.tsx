import ACTIONS from 'data/ACTIONS'
import {CooldownDowntime} from 'parser/core/modules/CooldownDowntime'

export default class OGCDDowntime extends CooldownDowntime {
	trackedCds = [
		{cooldowns: [ACTIONS.TECHNICAL_STEP]},
		{cooldowns: [ACTIONS.STANDARD_STEP]},
		{cooldowns: [ACTIONS.DEVILMENT]},
		{cooldowns: [ACTIONS.FLOURISH]},
	]
}
