declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX &amp; iNevet
                 * Nukkit Project
                 */
                // @ts-ignore
                interface ProtocolInfo {
                    /**
                     * Actual Minecraft: PE protocol version
                     */
                    // @ts-ignore
                    readonly CURRENT_PROTOCOL: number /*int*/
                    // @ts-ignore
                    readonly SUPPORTED_PROTOCOLS: java.util.List<java.lang.Integer | number> | Array<java.lang.Integer | number>
                    // @ts-ignore
                    readonly MINECRAFT_VERSION: java.lang.String | string
                    // @ts-ignore
                    readonly MINECRAFT_VERSION_NETWORK: java.lang.String | string
                    // @ts-ignore
                    readonly LOGIN_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly PLAY_STATUS_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SERVER_TO_CLIENT_HANDSHAKE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly CLIENT_TO_SERVER_HANDSHAKE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly DISCONNECT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly RESOURCE_PACKS_INFO_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly RESOURCE_PACK_STACK_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly RESOURCE_PACK_CLIENT_RESPONSE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly TEXT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SET_TIME_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly START_GAME_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly ADD_PLAYER_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly ADD_ENTITY_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly REMOVE_ENTITY_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly ADD_ITEM_ENTITY_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly TAKE_ITEM_ENTITY_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly MOVE_ENTITY_ABSOLUTE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly MOVE_PLAYER_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly RIDER_JUMP_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly UPDATE_BLOCK_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly ADD_PAINTING_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly TICK_SYNC_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly LEVEL_SOUND_EVENT_PACKET_V1: number /*byte*/
                    // @ts-ignore
                    readonly LEVEL_EVENT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly BLOCK_EVENT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly ENTITY_EVENT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly MOB_EFFECT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly UPDATE_ATTRIBUTES_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly INVENTORY_TRANSACTION_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly MOB_EQUIPMENT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly MOB_ARMOR_EQUIPMENT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly INTERACT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly BLOCK_PICK_REQUEST_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly ENTITY_PICK_REQUEST_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly PLAYER_ACTION_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly ENTITY_FALL_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly HURT_ARMOR_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SET_ENTITY_DATA_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SET_ENTITY_MOTION_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SET_ENTITY_LINK_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SET_HEALTH_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SET_SPAWN_POSITION_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly ANIMATE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly RESPAWN_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly CONTAINER_OPEN_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly CONTAINER_CLOSE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly PLAYER_HOTBAR_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly INVENTORY_CONTENT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly INVENTORY_SLOT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly CONTAINER_SET_DATA_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly CRAFTING_DATA_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly CRAFTING_EVENT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly GUI_DATA_PICK_ITEM_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly ADVENTURE_SETTINGS_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly BLOCK_ENTITY_DATA_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly PLAYER_INPUT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly FULL_CHUNK_DATA_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SET_COMMANDS_ENABLED_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SET_DIFFICULTY_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly CHANGE_DIMENSION_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SET_PLAYER_GAME_TYPE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly PLAYER_LIST_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SIMPLE_EVENT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly EVENT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SPAWN_EXPERIENCE_ORB_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly CLIENTBOUND_MAP_ITEM_DATA_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly MAP_INFO_REQUEST_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly REQUEST_CHUNK_RADIUS_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly CHUNK_RADIUS_UPDATED_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly ITEM_FRAME_DROP_ITEM_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly GAME_RULES_CHANGED_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly CAMERA_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly BOSS_EVENT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SHOW_CREDITS_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly AVAILABLE_COMMANDS_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly COMMAND_REQUEST_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly COMMAND_BLOCK_UPDATE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly COMMAND_OUTPUT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly UPDATE_TRADE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly UPDATE_EQUIPMENT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly RESOURCE_PACK_DATA_INFO_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly RESOURCE_PACK_CHUNK_DATA_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly RESOURCE_PACK_CHUNK_REQUEST_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly TRANSFER_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly PLAY_SOUND_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly STOP_SOUND_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SET_TITLE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly ADD_BEHAVIOR_TREE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly STRUCTURE_BLOCK_UPDATE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SHOW_STORE_OFFER_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly PURCHASE_RECEIPT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly PLAYER_SKIN_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SUB_CLIENT_LOGIN_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly INITIATE_WEB_SOCKET_CONNECTION_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SET_LAST_HURT_BY_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly BOOK_EDIT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly NPC_REQUEST_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly PHOTO_TRANSFER_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly MODAL_FORM_REQUEST_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly MODAL_FORM_RESPONSE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SERVER_SETTINGS_REQUEST_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SERVER_SETTINGS_RESPONSE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SHOW_PROFILE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SET_DEFAULT_GAME_TYPE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly MOVE_ENTITY_DELTA_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SET_SCOREBOARD_IDENTITY_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SET_LOCAL_PLAYER_AS_INITIALIZED_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly UPDATE_SOFT_ENUM_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly NETWORK_STACK_LATENCY_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SCRIPT_CUSTOM_EVENT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SPAWN_PARTICLE_EFFECT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly AVAILABLE_ENTITY_IDENTIFIERS_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly LEVEL_SOUND_EVENT_PACKET_V2: number /*byte*/
                    // @ts-ignore
                    readonly NETWORK_CHUNK_PUBLISHER_UPDATE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly BIOME_DEFINITION_LIST_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly LEVEL_SOUND_EVENT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly LEVEL_EVENT_GENERIC_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly LECTERN_UPDATE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly VIDEO_STREAM_CONNECT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly CLIENT_CACHE_STATUS_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly ON_SCREEN_TEXTURE_ANIMATION_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly MAP_CREATE_LOCKED_COPY_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly STRUCTURE_TEMPLATE_DATA_EXPORT_REQUEST: number /*byte*/
                    // @ts-ignore
                    readonly STRUCTURE_TEMPLATE_DATA_EXPORT_RESPONSE: number /*byte*/
                    // @ts-ignore
                    readonly UPDATE_BLOCK_PROPERTIES: number /*byte*/
                    // @ts-ignore
                    readonly CLIENT_CACHE_BLOB_STATUS_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly CLIENT_CACHE_MISS_RESPONSE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly EDUCATION_SETTINGS_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly EMOTE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly MULTIPLAYER_SETTINGS_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly SETTINGS_COMMAND_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly ANVIL_DAMAGE_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly COMPLETED_USING_ITEM_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly NETWORK_SETTINGS_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly PLAYER_AUTH_INPUT_PACKET: number /*byte*/
                    // @ts-ignore
                    readonly BATCH_PACKET: number /*byte*/
                }
            }
        }
    }
}
