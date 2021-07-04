export interface Mission {
	flight_number: number;
	mission_name: string;
	mission_id?: (string | null)[] | null;
	upcoming: boolean;
	launch_year: string;
	launch_date_unix: number;
	launch_date_utc: string;
	launch_date_local: string;
	is_tentative: boolean;
	tentative_max_precision: string;
	tbd: boolean;
	launch_window?: number | null;
	rocket: Rocket;
	ships?: (string | null)[] | null;
	telemetry: Telemetry;
	launch_site: LaunchSite;
	launch_success: boolean;
	launch_failure_details?: LaunchFailureDetails | null;
	links: Links;
	details?: string | null;
	static_fire_date_utc?: string | null;
	static_fire_date_unix?: number | null;
	timeline?: Timeline | null;
	crew?: null;
	last_date_update?: string | null;
	last_ll_launch_date?: string | null;
	last_ll_update?: string | null;
	last_wiki_launch_date?: string | null;
	last_wiki_revision?: string | null;
	last_wiki_update?: string | null;
	launch_date_source?: string | null;
}

interface Rocket {
	rocket_id: string;
	rocket_name: string;
	rocket_type: string;
	first_stage: FirstStage;
	second_stage: SecondStage;
	fairings?: Fairings | null;
}

interface FirstStage {
	cores?: (CoresEntity)[] | null;
}

interface CoresEntity {
	core_serial: string;
	flight: number;
	block?: number | null;
	gridfins: boolean;
	legs: boolean;
	reused: boolean;
	land_success?: boolean | null;
	landing_intent: boolean;
	landing_type?: string | null;
	landing_vehicle?: string | null;
}

interface SecondStage {
	block?: number | null;
	payloads?: (PayloadsEntity)[] | null;
}

interface PayloadsEntity {
	payload_id: string;
	norad_id?: (number | null)[] | null;
	reused: boolean;
	customers?: (string)[] | null;
	nationality?: string | null;
	manufacturer?: string | null;
	payload_type: string;
	payload_mass_kg?: number | null;
	payload_mass_lbs?: number | null;
	orbit: string;
	orbit_params: OrbitParams;
	cap_serial?: string | null;
	mass_returned_kg?: number | null;
	mass_returned_lbs?: number | null;
	flight_time_sec?: number | null;
	cargo_manifest?: string | null;
	uid?: string | null;
}

interface OrbitParams {
	reference_system?: string | null;
	regime?: string | null;
	longitude?: number | null;
	lifespan_years?: number | null;
	epoch?: string | null;
	mean_motion?: number | null;
	raan?: number | null;
	semi_major_axis_km?: number | null;
	eccentricity?: number | null;
	periapsis_km?: number | null;
	apoapsis_km?: number | null;
	inclination_deg?: number | null;
	period_min?: number | null;
	arg_of_pericenter?: number | null;
	mean_anomaly?: number | null;
}

interface Fairings {
	reused?: boolean | null;
	recovery_attempt: boolean;
	recovered?: boolean | null;
	ship?: string | null;
}

interface Telemetry {
	flight_club?: string | null;
}

interface LaunchSite {
	site_id: string;
	site_name: string;
	site_name_long: string;
}

interface LaunchFailureDetails {
	time: number;
	altitude?: number | null;
	reason: string;
}

interface Links {
	mission_patch: string;
	mission_patch_small: string;
	reddit_campaign?: string | null;
	reddit_launch?: string | null;
	reddit_recovery?: string | null;
	reddit_media?: string | null;
	presskit?: string | null;
	article_link?: string | null;
	wikipedia?: string | null;
	video_link: string;
	youtube_id: string;
	flickr_images?: (string | null)[] | null;
}

interface Timeline {
	webcast_liftoff?: number | null;
	go_for_prop_loading?: number | null;
	rp1_loading?: number | null;
	stage1_lox_loading?: number | null;
	stage2_lox_loading?: number | null;
	engine_chill?: number | null;
	prelaunch_checks?: number | null;
	propellant_pressurization?: number | null;
	go_for_launch?: number | null;
	ignition?: number | null;
	liftoff?: number | null;
	maxq?: number | null;
	meco?: number | null;
	stage_sep?: number | null;
	second_stage_ignition?: number | null;
	'seco-1'?: number | null;
	dragon_separation?: number | null;
	dragon_solar_deploy?: number | null;
	dragon_bay_door_deploy?: number | null;
	fairing_deploy?: number | null;
	payload_deploy?: number | null;
	second_stage_restart?: number | null;
	'seco-2'?: number | null;
	webcast_launch?: number | null;
	payload_deploy_1?: number | null;
	payload_deploy_2?: number | null;
	first_stage_boostback_burn?: number | null;
	first_stage_entry_burn?: number | null;
	first_stage_landing?: number | null;
	beco?: number | null;
	side_core_sep?: number | null;
	side_core_boostback?: number | null;
	center_stage_sep?: number | null;
	center_core_boostback?: number | null;
	side_core_entry_burn?: number | null;
	center_core_entry_burn?: number | null;
	side_core_landing?: number | null;
	center_core_landing?: number | null;
	first_stage_landing_burn?: number | null;
	stage1_rp1_loading?: number | null;
	stage2_rp1_loading?: number | null;
	'seco-3'?: number | null;
	'seco-4'?: number | null;
}
