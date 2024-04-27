export interface RequestParamsSearch {
    from: string;
    to: string;
    format: 'XML' | 'JSON';
    lang: 'RU' | 'UA';
    apikey: string
    date: Date;
    transport_types: TransportType;
    system: TransportSystemCode;
    show_systems: 'yandex' | 'esr';
    offset: number
    limit: number;
    add_days_mask: true | false;
    result_timezone: string;
    transfers: true | false;
}

export type TransportType = 'plane' | 'train' | 'suburban' | 'bus' | 'water' | 'helicopter';

export type TransportSystemCode = 'yandex' | 'iata' | 'sirena' | 'express' | 'esr';
