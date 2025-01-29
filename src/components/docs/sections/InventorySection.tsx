import React from 'react';

const InventorySection: React.FC = () => {
  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="p-4 bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-100">
        <p className="text-emerald-600 leading-relaxed">
          Your inventory contains the resources needed to help our community sprout grow.
          Manage your resources wisely to maximize your contributions and potential token allocation.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-emerald-800">Resource Management</h2>

        <div className="grid gap-4">
          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Resource Types</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-2 mb-1">
                      <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-4 h-4" />
                      <span className="text-sm font-medium text-blue-700">Water</span>
                    </div>
                    <p className="text-xs text-blue-600">Max: Unlimited</p>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                    <div className="flex items-center gap-2 mb-1">
                      <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-4 h-4" />
                      <span className="text-sm font-medium text-stone-700">Fertilizer</span>
                    </div>
                    <p className="text-xs text-stone-600">Max: Unlimited</p>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                    <div className="flex items-center gap-2 mb-1">
                      <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-4 h-4" />
                      <span className="text-sm font-medium text-amber-700">Sunshine</span>
                    </div>
                    <p className="text-xs text-amber-600">Max: Unlimited</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Resource Claiming</h3>
              <p className="text-sm text-emerald-600 mb-2">
                Claim new resources every hour to maintain your contribution flow:
              </p>
              <ul className="space-y-1 text-sm text-emerald-600">
                <li>5 Water units per claim</li>
                <li>2 Fertilizer units per claim</li>
                <li>2 Sunshine units per claim</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Resource Limits</h3>
              <p className="text-sm text-emerald-600">
                Each resource type has no limit. Plan your claims and contributions to avoid potentially wasting resources and maximize your contribution potential.
              </p>
              <div className="mt-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
                <p className="text-sm text-amber-700">
                  <strong>Tip:</strong> Use your resources regularly to maintain space for new claims and maximize your contribution potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventorySection;