/*******************************************************************************

Facebook Reactions
==================

@author David Miranda

I've always thought there should be a quick and easy way to express dislike on
Facebook. If someone gets sick or loses a pet hamster, I want a quick way to 
respond and say I feel for them.

But when I saw the brilliant post on the Poorly Drawn Lines webcomic with 
proposed Facebook buttons[1], I knew them I needed to make that a reality.

These are the new reactions that this plugin adds to Facebook:
- dislike
- hate
- love
- threaten
- applaud
- stare creepily
- accuse of racism
- offer bribe
- express doubt
- incite rebellion
- pass joint
- throw tomato

[1] http://poorlydrawnlines.com/comic/proposed-facebook-buttons/

*******************************************************************************/


(function ($) {
	var reactionSvgsMap = {
		'dislike': '<svg version="1.1" viewBox="0 0 30 30" preserveAspectRatio="xMinYMin meet"><path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M9.69,8.097c0,0,4.34,0.946,5.508,0	c1.169-0.946,2.504-2.155,3.839-2.247c1.336-0.091,4.841-0.191,5.787,1.333s1.947,6.088,0.667,8.592c0,0-1.983,0.647-4.876,0.591	l0.174,4.473c0,0,0.011,1.629-1.176,1.521c-1.188-0.107-1.417-0.854-1.719-3.747c0,0,0.142-1.28-0.582-2.115	c-0.724-0.835-3.505-1.168-4.284-1.168s-2.616-0.056-2.616-0.056L9.69,8.097z"/><path style="fill:#98ADCA;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M5.095,9.988c0,0-0.358-2.781,0.532-3.672	c0.891-0.891,4.006-0.278,4.34,0c0.335,0.278,0.78,2.337,0.78,3.672c0,1.336,0.5,4.619,0.556,5.843c0.036,0.61-0.115,0.947-1,1.112	c-1.225-0.11-4.23,0.667-4.731-0.611C5.07,15.052,5.095,9.988,5.095,9.988z"/></svg>',
		'hate': '<svg version="1.1" viewBox="0 0 30 30" preserveAspectRatio="xMinYMin meet"><path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M11.752,11.69c0,0,1.066,0.194,1.26-1.842	c0.193-2.034-0.436-4.214,0.727-4.796c1.162-0.582,1.647,0.049,1.841,0.824c0.193,0.776,0.677,3.972,0.581,4.893	c-0.098,0.921,1.113,1.163,1.598,1.211c0.485,0.049,1.938-0.096,2.278,1.26c0.339,1.356,0.048,3.538-0.678,4.506	c-0.727,0.969-1.357,0.629-1.405,3.198c-0.048,2.568,0.048,3.198,0.048,3.198l-6.25-0.339c0,0,0.339-3.44,0-4.312	c-0.34-0.873-1.792-1.211-2.277-2.471c-0.484-1.26-0.726-0.969-0.678-4.167c0,0,0.291-0.921,1.163-1.115	C10.831,11.545,11.752,11.69,11.752,11.69z"/><path style="fill:#98ADCA;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M18.875,21.961c0,0-7.462-0.484-8.77,0	c0,0-0.388,0.729-0.388,2.181s0.388,1.89,0.873,2.035c0.485,0.145,7.606,0,8.285-0.243C19.553,25.693,19.166,22.301,18.875,21.961z"	/></svg>',
		'love': '<svg version="1.1" viewBox="0 0 30 30" preserveAspectRatio="xMinYMin meet"><path style="fill:#F85150;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M15.146,8.563c0,0-2.154-2.355-4.509-2.055	c-2.354,0.3-4.208,1.504-4.409,5.612c-0.201,4.108,3.356,7.064,5.161,8.969c1.802,1.903,2.955,2.704,2.955,2.704	s5.863-4.76,6.664-6.213c0.8-1.452,2.104-4.808,2.104-6.663c0-1.853-0.752-4.708-3.508-4.708C16.85,6.208,15.146,8.563,15.146,8.563	z"/></svg>',
		'threaten': '<svg version="1.1" viewBox="0 0 30 30" preserveAspectRatio="xMinYMin meet"><path d="M17.582,23.724c0,0-0.196,2.607,0,2.875c0.195,0.268,2.51,0.22,2.705,0c0.196-0.219,0.072-2.9,0-3.241"/><path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M16.972,14.017c0,0,0.215-8.324,0.573-10.16	c0,0,0.883,1.407,1.001,2.289c0.12,0.883,0.667,7.513,0.667,8.061C19.213,14.757,16.972,14.017,16.972,14.017z"/><path d="M16.5,16.78v-1.95c0,0-0.837-0.025-1.08-0.244c-0.242-0.22,0.338-1.17,1.044-1.17c0,0,1.107,0.342,1.765,0.317	c0.658-0.024,1.321-0.366,1.492-0.317c0.17,0.048,1.33,0.755,1.355,1.047c0.024,0.294-1.412,0.589-1.412,0.589l0.058,1.22	l-0.186,0.775L16.5,16.78z"/><path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M9.954,18.777c0,0,2.777,0.195,4.971-2.193	c0,0,1.121-1.365,1.852-1.072c0,0-0.097,0.546,0.39,0.76c0.487,0.214,2.632,0.273,2.973,0c0.342-0.273,1.169,0.275,1.511,0.853	c0.341,0.58,1.706,5.355-0.342,7.062c-2.047,1.706-4.386,0.828-5.604,0.487c-1.219-0.341-0.93-0.982-5.216-0.974L9.954,18.777z"/><path style="fill:#98ADCA;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M6.006,18.046c0,0-0.341-1.461,1.315-1.657	c1.657-0.195,3.022-0.195,3.217,0.391c0.194,0.584,0.292,3.119,0.341,4.678c0.049,1.56,0.439,3.851-0.438,4.094	c-0.878,0.244-2.828,0.487-3.461,0C6.347,25.065,6.152,25.991,6.006,18.046z"/></svg>',
		'applaud': '<svg version="1.1" viewBox="0 0 30 30" preserveAspectRatio="xMinYMin meet"><path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M7.576,17.789c0,0,1.687-8.237,2.265-8.938	c0.576-0.699,0.823-1.234,1.316-1.153c0.495,0.083,0.825,1.277,0.825,1.689c0,0.413,2.306-4.819,4.284-5.313	c1.977-0.496,6.136-0.288,5.437,4.612c-0.7,4.901-7.855,9.926-7.855,9.926l-4.786,2.266L7.576,17.789z"/><path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M9.062,19.643c0,0,2.797-7.909,4.196-8.814	c0,0,0.741-0.906,1.195-0.7c0.453,0.206,0.7,0.988,0.618,1.936l0.016,0.66c0,0,2.703-4.16,4.309-4.613	c1.606-0.454,4.531-0.082,4.984,2.307c0.453,2.389-0.453,4.22-2.554,6.023c-2.101,1.802-9.474,6.868-9.474,6.868L9.062,19.643z"/><path style="fill:#98ADCA;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M6.38,16.72c0,0,0.865-0.866,1.669,0.452	c0.802,1.317,5.416,5.767,5.703,6.096c0.289,0.33-0.082,1.565-1.112,2.102c-1.03,0.535-1.194,1.317-1.894,1.028	c-0.7-0.288-6.384-6.795-6.466-7.454C4.198,18.284,5.598,17.46,6.38,16.72z"/></svg>',
		'stare creepily': '<svg version="1.1" viewBox="0 0 30 30" preserveAspectRatio="xMinYMin meet"><ellipse transform="matrix(0.9989 0.0471 -0.0471 0.9989 0.7546 -0.4384)" style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" cx="9.689" cy="15.808" rx="2.838" ry="2.744"/><path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M7.319,17.306c0,0,2.349-1.334,4.504,0.318"/><circle cx="9.693" cy="15.373" r="0.427"/><path style="stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M6.432,12.776c0,0,3.364,0.421,6.522,0.308"/><ellipse transform="matrix(-0.9989 0.0467 -0.0467 -0.9989 47.6925 31.5754)" style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" cx="23.477" cy="16.345" rx="2.838" ry="2.744"/><path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M25.848,17.843c0,0-2.349-1.333-4.503,0.316"	/><circle cx="23.475" cy="15.911" r="0.427"/><path style="stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M26.735,13.314c0,0-3.364,0.42-6.522,0.307"/></svg>',
		'accuse of racism': '<svg version="1.1" viewBox="0 0 30 30" preserveAspectRatio="xMinYMin meet"><path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M8.563,10.833c0,0,2.691,0.405,4.203-0.775	c1.511-1.18,2.654-1.991,3.686-1.991c1.033,0,2.801,1.364,3.17,1.806c0.369,0.442,3.169,0.146,3.87,0.146	c0.702,0,3.199-0.589,3.351,0.886c0.151,1.474-2.503,1.584-2.503,1.584s-3.133,0.406-3.723,0.848	c-0.589,0.441-0.626,2.874-1.733,4.166c-2.006,1.114-2.267,1.04-4.717,0.847c-2.322-0.516-1.954-0.884-3.244-0.995	c-1.29-0.11-2.506,0-2.506,0L8.563,10.833z"/><path style="fill:#98ADCA;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M4.448,11.864c0,0-0.308-2.469,0.246-3.023	C5.247,8.289,6.02,8.326,6.647,8.326c0.626,0,1.842,0,1.842,0S8.785,8.694,8.748,10.5c-0.037,1.806,0.003,8.883,0.003,8.883	s-3.025,0.11-3.836-0.295C4.104,18.684,4.448,11.864,4.448,11.864z"/></svg>',
		'offer bribe': '<svg version="1.1" viewBox="0 0 30 30" preserveAspectRatio="xMinYMin meet"><path style="fill:#86AA62;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M18.207,16.602l-1.513-8.07	c0,0,3.295-0.204,3.43-0.136c0.135,0.067,0,7.5,0,7.5L18.207,16.602z"/><path style="fill:#86AA62;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M19.283,16.333c0,0,0.135-9.181,0.235-9.417	c0.102-0.235,1.144-0.268,1.479-0.369c0.336-0.101,3.909,1.479,4.005,1.85c0.098,0.37-2.521,6.592-2.859,8.341	C21.806,18.485,19.283,16.333,19.283,16.333z"/><path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M8.925,17.208c0,0,2.758,0.571,4.944-0.875	c2.186-1.445,3.781-2.307,3.781-2.307s0.02,0.229,0.295,0.771c0.124,0.249-0.063,0.82,0.228,0.999	c0.929,0.571,4.069-0.136,4.373-0.472c0.303-0.335,0.807,1.547,0.807,3.027c0,1.479,0.639,4.104-1.411,5.146	c-2.053,1.043-5.081,1.043-6.391,0.403c-1.313-0.639-4.843-1.311-6.054-1.277C8.286,22.656,8.925,17.208,8.925,17.208z"/><path style="fill:#85A1C9;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M5.258,16.737c0,0-0.369-1.648,0.774-1.816	c1.143-0.167,3.396-1.21,3.464,0.909c0.068,2.118,0.74,6.894,0.472,7.87c-0.27,0.976-0.707,0.875-1.682,0.976	c-0.975,0.101-2.287,0.571-2.656-1.109C5.258,21.883,5.258,16.737,5.258,16.737z"/></svg>',
		'express doubt': '<svg version="1.1" viewBox="0 0 30 30" preserveAspectRatio="xMinYMin meet"><ellipse style="fill:none;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" cx="9.097" cy="16.331" rx="3.126" ry="3.233"/><ellipse style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" cx="23.067" cy="16.479" rx="3.269" ry="3.381"/><path style="fill:none;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M6.434,14.64c0,0,2.114,0.685,5.328,0"/><path style="fill:none;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M6.729,18.44c0,0,2.834-0.554,4.736,0"/><circle cx="9.097" cy="16.33" r="0.411"/><circle cx="23.067" cy="16.479" r="0.411"/><path style="fill:none;stroke:#000000;stroke-width:0.8;stroke-linecap:round;stroke-miterlimit:10;" d="M6.257,12.168	c0,0,0.964-1.322,1.75-1.322c0.785,0,0.821,0.737,1.5,0.929c0.68,0.192,1.393,0.393,1.393,0.393"/><path style="stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M20.326,14.64c0,0,2.49,0.597,5.572,0.152"/><path style="stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M20.407,18.44c0,0,2.998-0.375,5.321,0"/><path style="stroke:#000000;stroke-width:0.8;stroke-linecap:round;stroke-miterlimit:10;" d="M21.762,11.311	c0,0,1.074,0.929,3.36,0.358"/></svg>',
		'incite rebellion': '<svg version="1.1" viewBox="0 0 30 30" preserveAspectRatio="xMinYMin meet"><path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M13.395,21.265c0,0-0.156-3.035-0.624-3.774	c-0.467-0.738-2.684-2.373-2.8-3.772c-0.117-1.401,0.233-3.269,0.816-3.424c0.583-0.156,0.883-0.35,0.883-0.35s-0.283-1.44,0-2.374	c0.284-0.934,1.801-1.479,2.774-1.751c0.972-0.272,4.552-0.622,6.108,1.44c1.556,2.063,1.439,2.411,0.914,4.902	c-0.524,2.489-1.537,3.579-1.614,5.292c-0.078,1.71-0.078,4.24-0.078,4.24L13.395,21.265z"/><path style="fill:none;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M11.671,9.967c0,0,4.013-0.273,4.541,0.467	c0.529,0.74,1.423,1.324,0.529,2.257c-0.895,0.933-2.568,0.895-2.918,0.816"/><path style="fill:#9AAFCC;stroke:#000000;stroke-width:0.8;stroke-linecap:round;stroke-miterlimit:10;" d="M11.058,23.155	c0,0-0.426-1.813,0.469-2.202c0.895-0.389,2.607-0.311,4.202-0.311c1.595,0,5.603-0.435,5.603,1.183	c0,1.618,0.662,3.525-0.934,3.719c-1.595,0.195-7.858,0.272-8.442,0C11.371,25.272,11.058,23.155,11.058,23.155z"/></svg>',
		'pass joint': '<svg version="1.1" viewBox="0 0 30 30" preserveAspectRatio="xMinYMin meet"><path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M9.649,19.101c0,0,1.809,0.131,2.994-1.317	c1.184-1.446,3.257-3.75,4.112-3.816c0.856-0.066,2.533,0.823,2.105,1.875c-0.427,1.052-2.764,2.106-2.532,3.75	c0.229,1.646,1.644,1.909,2.302,1.48c0.658-0.428,2.401-1.447,2.171-3.324c-0.23-1.874,0.23-1.776,0.724-1.842	c0.494-0.065,2.039,0.757,1.678,3.817c-0.361,3.059-2.303,4.968-3.29,5.198c-0.988,0.23-7.732,0.461-10.036-1.612	C7.576,21.239,9.649,19.101,9.649,19.101z"/><path style="fill:#9AAFCC;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M5.832,19.265c0,0-0.196-1.021,0-1.382	c0.198-0.362,0.823-0.362,1.481-0.527c0.658-0.164,2.336-0.691,2.632,0.954c0.295,1.645,0.361,5.034,0.329,5.923	c-0.034,0.888,0.263,1.842-0.526,2.007c-0.79,0.164-3.026,0.197-3.126-0.329C6.523,25.384,5.832,19.265,5.832,19.265z"/><path style="fill:#B58E0D;stroke:#000000;stroke-width:0.7;stroke-miterlimit:10;" d="M22.185,12.487	c0,0.354-0.275,0.263-0.815,0.263c-0.541,0-0.979-0.289-0.979-0.642c0-0.355,0.438-0.642,0.979-0.642	C21.91,11.466,22.185,12.132,22.185,12.487z"/><path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.7;stroke-miterlimit:10;" d="M18.796,17.145c0,0,0.591,0.838,1.545,0.376	c0,0,1.35-3.684,1.646-4.54v-0.362c0,0-1.448,0.132-1.597-0.263C20.243,11.96,18.796,17.145,18.796,17.145z"/><path style="fill:none;stroke:#000000;stroke-width:0.7;stroke-miterlimit:10;" d="M21.56,10.085c0.066-0.132-0.296-1.119,0-1.448	c0.295-0.329,0.592-0.559,0.428-0.855c-0.165-0.296-1.053-1.054-0.988-1.382c0.067-0.329,0.517-0.526,0.517-0.526"/><path style="fill:none;stroke:#000000;stroke-width:0.7;stroke-miterlimit:10;" d="M22.744,10.282c0-0.099,0.23-1.02,0.789-1.546	c0.559-0.527,0.559-0.527,0.559-0.527s0.033-0.658-0.197-1.152c-0.23-0.494-0.195-0.856,0.199-1.02"/></svg>',
		'throw tomato': '<svg version="1.1" viewBox="0 0 30 30" preserveAspectRatio="xMinYMin meet"><path style="fill:#70AB1F;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M18.374,11.199c0,0-1.07-1.269-1.609-1.919	c0,0,1.023-0.195,1.479,0c0,0,0-1.335,0.13-1.53c0.13-0.195,1.139,0.586,1.301,0.715c0,0,0.878-0.648,1.236-0.746	c0.357-0.099,0.033,2.146,0,2.699C20.879,10.972,20,11.199,20,11.199H18.374z"/><path style="fill:#E84B46;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M15.706,14.777c0,0-0.39-1.724,0-2.375	c0.391-0.651,1.594-1.398,2.473-1.692c0.878-0.292,3.351-0.78,4.034-0.196c0.684,0.587,2.375,2.148,1.854,4.035	c-0.52,1.887-3.643,4.75-3.643,4.75l-3.481-0.358L15.706,14.777z"/><path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M8.452,15.201c0,0,3.448,0.259,4.814-0.261	c1.366-0.52,3.838-1.431,4.978-1.756c1.138-0.325,1.334-0.521,1.951-0.391c0.619,0.131,1.529,0.717,1.008,1.432	c-0.52,0.715-4.034,1.985-4,2.765c0.032,0.78,0.683,1.366,1.561,1.398c0.878,0.033,3.969-0.584,4.262-3.676	c0,0,0.586-1.074,1.074-0.911c0.488,0.163,1.138,0.847,0.944,2.083c-0.196,1.236-1.009,3.74-2.701,4.553	c-1.691,0.814-4.554,0.716-6.246,0.489c-1.691-0.228-6.019-0.554-7.027-0.391L8.452,15.201z"/><path style="fill:#99ABC3;stroke:#000000;stroke-width:0.8;stroke-miterlimit:10;" d="M5.329,18.324l-0.293-3.351	c0,0,0.033-1.008,0.683-1.333c0.652-0.327,2.408-0.294,2.831,0c0.423,0.292,0.423,2.406,0.52,3.35	c0.098,0.944,0.65,4.099,0.814,4.554c0,0,0.13,0.292-0.619,0.26s-3.578,0.164-3.644-0.26C5.555,21.121,5.329,18.324,5.329,18.324z"	/></svg>'
	};

	var storyArchive = [];

	function findStories () {
		$('[data-insertion-position]').forEach(function (element) {
			if (storyArchive.indexOf(element) < 0) {
				aNewStoryWasFound($(element));
				storyArchive.push(element);
			}
		})
	}

	function addReactButtonToStory ($storyElement, $likeButtonElement) {
		var reactionButtonsHtmlArray = [];
		var theKeys = Object.keys(reactionSvgsMap);

		// assemble reaction buttons!
		reactionButtonsHtmlArray.push('<span class="little-clickable-buttons">');

		theKeys.forEach(function (name, index) {
			reactionButtonsHtmlArray.push('<a title="' + name + '" class="little-clickable-button">' + reactionSvgsMap[name] + '</a>');
		});

		reactionButtonsHtmlArray.push('<span class="little-nub-border"></span>');
		reactionButtonsHtmlArray.push('<span class="little-nub"></span>');
		reactionButtonsHtmlArray.push('</span>');

		var reactButtonHtml = reactionButtonsHtmlArray.join('') + '<a class="react-button">React</a> &#183; ';

		$likeButtonElement
			.parent()
			.before(reactButtonHtml)
			.parent()
			.css('position', 'relative')
			.css('overflow', 'visible')
			.parent()
			.css('overflow', 'visible')
			.parent()
			.css('overflow', 'visible')
			.parent()
			.css('overflow', 'visible')
			.parent()
			.css('overflow', 'visible');
	}

	function addReactButtonObserver () {
		// todo!
	}

	function addReactionsContainer ($storyElement, $likeButtonElement) {
		$likeButtonElement
			.parents('.clearfix')
			.eq(0)
			.after('<div class="UFIRow reactions-container"></div>');
	}

	function aNewStoryWasFound ($storyElement) {
		$likeButtonElement = $storyElement.find('.UFILikeLink').not('.accessible_elem').first();

		addReactButtonToStory($storyElement, $likeButtonElement);
		addReactButtonObserver($storyElement);
		addReactionsContainer($storyElement, $likeButtonElement);
	}

	function addReactionToStory (reactionType, $storyElement) {
		var $reactionsContainer = $storyElement.find('.reactions-container').first();

		// add images
		var $littleContainer = $('<div class="little-container"></div');
		$littleContainer
			.attr('title', reactionType)
			.addClass('bounce-it-out');

		var $svg = $(reactionSvgsMap[reactionType]);

		//var $littleNumber = $('<div class="little-number">' + individualMatch.count + '</div>')

		$littleContainer
			.append($svg);
			//.append($littleNumber);

		$reactionsContainer
			.append($littleContainer)
			.addClass('has-reactions');
	}

	function checkIfReactionIsAlreadyThere (storyId, reactionType) {
		//todo
	}

	function displayCannotPostReactionMessage ($storyElement) {
		//todo
	}


	/***************************************
	 *                                     *
	 *           DO THE STUFF              *
	 *                                     *
	 ***************************************/

	var throttledFindStories = throttle(findStories, 200);

	 // on load
	throttledFindStories();


	$(window).scroll(function () {
		throttledFindStories();
	});




	/***************************************
	 *                                     *
	 *          CLICK HANDLERS             *
	 *                                     *
	 ***************************************/


	$('body').on('click', function (event) {
		var $element = $(event.target);

		if ($element.hasClass('react-button') && $element.is('a')) {
			if ($element.data('isExpanded')) {
				$element
					.siblings('.little-clickable-buttons')
					.css('display', 'none');

				$element.data('isExpanded', false);
			} else {
				$element
					.siblings('.little-clickable-buttons')
					.css('display', ' block');

				$element.data('isExpanded', true);
			}
		} else {
			$('.little-clickable-buttons').hide();
			$('.react-button').data('isExpanded', false);
		}
	});

	$('body').on('click', '.little-clickable-button', function (event) {
		var $littleClickableButton = $(this);
		var reactionType = $littleClickableButton.attr('title');
		var $storyElement = $littleClickableButton.parents('[data-insertion-position]').first();
		var storyId = 0; //todo
		var reactionIsAlreadyThere = checkIfReactionIsAlreadyThere(storyId, reactionType);

		if (!reactionIsAlreadyThere) {
			addReactionToStory(reactionType, $storyElement);
		} else {
			displayCannotPostReactionMessage($storyElement);
		}
	});

	// function mutationCallback (mutationInstances) {
	// 	//console.log('asd', mutationInstance);
	// 	mutationInstances.forEach(function (mutationInstance) {
	// 		console.log('bbb', mutationInstance/*.target /*&& mutationInstance.target.getAttribute('data-ft')*/);
			
	// 	});
	// }

	// // Setup a new observer to get notified of changes
	// var observer = new MutationObserver(mutationCallback);

	// // Observe a specific DOM node / subtree
	// observer.observe(document.querySelector('#stream_pagelet'), {
	// 	subtree: true, 
	// 	childList: true
	// });


	/**
	 * Creates and returns a new, throttled version of the passed function, that, 
	 * when invoked repeatedly, will only actually call the original function at most 
	 * once per every wait milliseconds. Useful for rate-limiting events that occur 
	 * faster than you can keep up with.
	 *
	 * from Underscore.js 1.5.0
	 * (c) 2011-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Underscore may be freely distributed under the MIT license.
	 */
	function throttle (func, wait, options) {
		var context, args, result;
		var timeout = null;
		var previous = 0;
		options || (options = {});
		var later = function() {
			previous = new Date;
			timeout = null;
			result = func.apply(context, args);
		};
		return function() {
			var now = new Date;
			if (!previous && options.leading === false) previous = now;
			var remaining = wait - (now - previous);
			context = this;
			args = arguments;
			if (remaining <= 0) {
				clearTimeout(timeout);
				timeout = null;
				previous = now;
				result = func.apply(context, args);
			} else if (!timeout && options.trailing !== false) {
				timeout = setTimeout(later, remaining);
			}
			return result;
		};
	};

})(Zepto);