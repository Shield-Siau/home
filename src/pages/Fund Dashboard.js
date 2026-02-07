// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixFetch from 'wix-fetch';

$w.onReady(async function () {
    // Load fund data
    const response = await wixFetch.fetch('/funds.json');
    const fundsData = await response.json();

    // Display total funds
    $w('#totalFunds').text = `Total Funds Available: ${fundsData.length}`;

    // Populate repeater with funds
    $w('#fundsRepeater').data = fundsData.map(fund => ({
        _id: fund.fcode,
        fcode: fund.fcode,
        fname: fund.fname
    }));

    // On item ready for repeater
    $w('#fundsRepeater').onItemReady(($item, itemData) => {
        $item('#fundCode').text = itemData.fcode;
        $item('#fundName').text = itemData.fname;
    });
});