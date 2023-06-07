const overrides = require('./shared/overrides');
const shared = require('./shared/rules');

// If we ever end up with multiple profiles, add a new configuration into profiles
const buildRules = (profile) => {
	const rules = profile;
	for (const override of profile.overrides) {
		Object.assign(override.rules, shared);
	}

	// Add overrides
	rules.overrides.push(...overrides);

	return rules;
};

module.exports = buildRules;
