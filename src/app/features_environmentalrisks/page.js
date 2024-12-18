import React from 'react'

const EnvironmentalRisks = () => {
    return (
        <div>
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold text-gray-700">Flooding</h3>
                    <p className="text-gray-600 text-sm">
                        Properties near water bodies face risks of flooding during heavy rains.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700">Pollution</h3>
                    <p className="text-gray-600 text-sm">
                        Air or soil pollution may affect the property's value and usability.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700">Climate Change</h3>
                    <p className="text-gray-600 text-sm">
                        Changing weather patterns may impact property safety and viability.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700">Environmental and Location-Specific Risks</h3>
                    <p className="text-gray-600 text-sm">
                        Land in disaster-prone or climate-sensitive areas may lose value, and changing development trends can reduce market demand for certain locations.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EnvironmentalRisks
