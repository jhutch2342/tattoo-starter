import React, { useState } from 'react';

const TattooCalculator = ({ onBack }) => {
  const [size, setSize] = useState('');
  const [complexity, setComplexity] = useState('');
  const [placement, setPlacement] = useState('');
  const [color, setColor] = useState('');
  const [estimate, setEstimate] = useState(null);

  // Base pricing structure
  const basePrices = {
    small: 150, // 1-3 inches
    medium: 300, // 3-6 inches
    large: 500, // 6-10 inches
    xlarge: 800, // 10+ inches
  };

  const complexityMultipliers = {
    simple: 1.0, // Basic line work, text
    moderate: 1.3, // Some shading, simple color
    detailed: 1.6, // Complex shading, multiple colors
    masterpiece: 2.0, // Photorealistic, intricate details
  };

  const placementMultipliers = {
    arm: 1.0,
    leg: 1.0,
    back: 1.1,
    chest: 1.1,
    ribs: 1.3, // More painful/difficult
    hands: 1.4, // Detailed work required
    face: 1.5, // High skill required
    neck: 1.2,
  };

  const colorMultipliers = {
    blackwork: 1.0,
    color: 1.2,
    fullcolor: 1.4,
  };

  const calculatePrice = () => {
    if (!size || !complexity || !placement || !color) {
      alert('Please fill in all fields to get an estimate');
      return;
    }

    const basePrice = basePrices[size];
    const complexityMult = complexityMultipliers[complexity];
    const placementMult = placementMultipliers[placement];
    const colorMult = colorMultipliers[color];

    const totalPrice = Math.round(
      basePrice * complexityMult * placementMult * colorMult
    );
    const lowEnd = Math.round(totalPrice * 0.8);
    const highEnd = Math.round(totalPrice * 1.2);

    setEstimate({
      low: lowEnd,
      high: highEnd,
      average: totalPrice,
    });
  };

  const resetCalculator = () => {
    setSize('');
    setComplexity('');
    setPlacement('');
    setColor('');
    setEstimate(null);
  };

  return (
    <div className="min-h-screen bg-[#E5E5E5] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center text-dark hover:text-gray-600 transition-colors mb-4"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </button>
          <h1 className="text-4xl lg:text-6xl font-tertiary text-dark mb-4">
            Tattoo Price Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get an estimated price range for your tattoo. Please note this is
            just an estimate - final pricing will be determined during your
            consultation.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-primary uppercase tracking-wider mb-6">
                Tattoo Details
              </h2>

              {/* Size Selection */}
              <div>
                <label className="block text-sm font-semibold mb-3 uppercase tracking-wide">
                  Size
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: 'small', label: 'Small (1-3")' },
                    { value: 'medium', label: 'Medium (3-6")' },
                    { value: 'large', label: 'Large (6-10")' },
                    { value: 'xlarge', label: 'X-Large (10"+)' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSize(option.value)}
                      className={`p-3 text-sm border-2 rounded transition-all ${
                        size === option.value
                          ? 'border-dark bg-dark text-white'
                          : 'border-gray-300 hover:border-dark'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Complexity Selection */}
              <div>
                <label className="block text-sm font-semibold mb-3 uppercase tracking-wide">
                  Complexity
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: 'simple', label: 'Simple' },
                    { value: 'moderate', label: 'Moderate' },
                    { value: 'detailed', label: 'Detailed' },
                    { value: 'masterpiece', label: 'Masterpiece' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setComplexity(option.value)}
                      className={`p-3 text-sm border-2 rounded transition-all ${
                        complexity === option.value
                          ? 'border-dark bg-dark text-white'
                          : 'border-gray-300 hover:border-dark'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Placement Selection */}
              <div>
                <label className="block text-sm font-semibold mb-3 uppercase tracking-wide">
                  Placement
                </label>
                <select
                  value={placement}
                  onChange={(e) => setPlacement(e.target.value)}
                  className="w-full p-3 border-2 border-gray-300 rounded focus:border-dark focus:outline-none"
                >
                  <option value="">Select placement</option>
                  <option value="arm">Arm</option>
                  <option value="leg">Leg</option>
                  <option value="back">Back</option>
                  <option value="chest">Chest</option>
                  <option value="ribs">Ribs</option>
                  <option value="hands">Hands</option>
                  <option value="neck">Neck</option>
                  <option value="face">Face</option>
                </select>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-semibold mb-3 uppercase tracking-wide">
                  Color
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'blackwork', label: 'Black Only' },
                    { value: 'color', label: 'Some Color' },
                    { value: 'fullcolor', label: 'Full Color' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setColor(option.value)}
                      className={`p-3 text-sm border-2 rounded transition-all ${
                        color === option.value
                          ? 'border-dark bg-dark text-white'
                          : 'border-gray-300 hover:border-dark'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={calculatePrice}
                  className="flex-1 bg-dark text-white py-3 px-6 rounded font-semibold uppercase tracking-wide hover:bg-gray-800 transition-all"
                >
                  Calculate Price
                </button>
                <button
                  onClick={resetCalculator}
                  className="px-6 py-3 border-2 border-gray-300 rounded font-semibold uppercase tracking-wide hover:border-dark transition-all"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Results & Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-primary uppercase tracking-wider mb-6">
                Price Estimate
              </h2>

              {estimate ? (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-dark mb-2">
                      ${estimate.low} - ${estimate.high}
                    </div>
                    <div className="text-gray-600">
                      Average: ${estimate.average}
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> This is an estimate only.
                      Final pricing depends on design specifics, artist
                      availability, and consultation results.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 p-6 rounded-lg text-center text-gray-500">
                  <p>Fill out the form to see your estimate</p>
                </div>
              )}

              {/* Pricing Info */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 uppercase tracking-wide">
                  What's Included
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Design consultation</li>
                  <li>• Custom artwork</li>
                  <li>• Professional tattooing</li>
                  <li>• Aftercare instructions</li>
                  <li>• Touch-up session (if needed)</li>
                </ul>
              </div>

              {/* Next Steps */}
              <div className="bg-gray-900 text-white p-6 rounded-lg">
                <h3 className="font-semibold mb-3 uppercase tracking-wide">
                  Ready to Book?
                </h3>
                <p className="text-sm mb-4">
                  Contact us to schedule your consultation and get an exact
                  quote.
                </p>
                <button className="w-full bg-white text-gray-900 py-2 px-4 rounded font-semibold hover:bg-gray-100 transition-all">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2 uppercase tracking-wide">
              Deposits
            </h3>
            <p className="text-sm text-gray-600">
              $100 deposit required to book. Applied to final tattoo cost.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2 uppercase tracking-wide">
              Payment
            </h3>
            <p className="text-sm text-gray-600">
              We accept cash, card, and digital payments. Payment plans
              available.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2 uppercase tracking-wide">
              Touch-ups
            </h3>
            <p className="text-sm text-gray-600">
              Free touch-ups within 6 months of completion (with proper
              aftercare).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TattooCalculator;
