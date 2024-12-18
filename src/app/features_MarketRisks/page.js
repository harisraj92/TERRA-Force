import React from 'react'

const MarketRisks = () => {
    return (
        <div>
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold text-gray-700">Economic Fluctuations</h3>
                    <p className="text-gray-600 text-sm">
                        Recession, inflation, or high unemployment can reduce demand for land, affect pricing, and increase development costs.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700">Market Volatility and Demand Imbalance</h3>
                    <p className="text-gray-600 text-sm">
                        Unpredictable real estate market cycles and oversupply can lead to declining land values and investment losses
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700">Interest Rate and Financing Risks</h3>
                    <p className="text-gray-600 text-sm">
                        Rising interest rates can increase borrowing costs, making land investments less appealing and harder to finance.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700">Regulatory and Policy Changes</h3>
                    <p className="text-gray-600 text-sm">
                        New zoning laws, environmental regulations, or tax policies can limit land use or profitability.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MarketRisks
