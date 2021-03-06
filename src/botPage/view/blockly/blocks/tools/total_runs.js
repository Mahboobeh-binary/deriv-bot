// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#3bwqd4
import { translate } from '../../../../../common/i18n';

Blockly.Blocks.total_runs = {
    init: function init() {
        this.appendDummyInput().appendField(translate('No. Of Runs'));
        this.setOutput(true, 'Number');
        this.setColour('#dedede');
        this.setTooltip(translate('Returns the number of runs since the beginning'));
        this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
    },
};
Blockly.JavaScript.total_runs = () => ['Bot.getTotalRuns()', Blockly.JavaScript.ORDER_ATOMIC];
