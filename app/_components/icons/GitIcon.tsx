import { ComponentPropsWithoutRef } from "react"

export const GitIcon = (props: ComponentPropsWithoutRef<"svg"> & {size?: number}) => {
    return (
       
        <svg 
        width={props.size} 
        height={props.size} 
        viewBox="0 0 256 250" 
        version="1.1" 
        preserveAspectRatio="xMidYMid"
        {...props}    
        >
        <g>
            <path d="M251.172245,116.593517 L139.398753,4.82845302 C132.966433,-1.60948434 122.525852,-1.60948434 116.085106,4.82845302 L92.8753863,28.0381721 L122.317995,57.4807809 C129.16041,55.1690784 137.005593,56.7195763 142.460425,62.1744081 C147.940536,67.6629464 149.479799,75.5755422 147.111919,82.4404282 L175.487156,110.815665 C182.352042,108.450594 190.273064,109.98143 195.755985,115.472777 C203.418591,123.132574 203.418591,135.547794 195.755985,143.213209 C188.09057,150.878624 175.67535,150.878624 168.007126,143.213209 C162.243319,137.443783 160.81922,128.977839 163.737639,121.877008 L137.275245,95.4146135 L137.272436,165.052198 C139.140337,165.979126 140.904309,167.212221 142.460425,168.762719 C150.123031,176.422516 150.123031,188.837736 142.460425,196.508768 C134.79501,204.171375 122.374173,204.171375 114.719993,196.508768 C107.057387,188.837736 107.057387,176.422516 114.719993,168.762719 C116.613174,166.872347 118.804095,165.442631 121.141077,164.481996 L121.141077,94.1955625 C118.804095,93.2405457 116.615983,91.8192558 114.719993,89.9148396 C108.914052,84.1173254 107.518042,75.5980132 110.492639,68.4690928 L81.4713611,39.4421974 L4.83125614,116.076685 C-1.60949009,122.52024 -1.60949009,132.960821 4.83125614,139.398759 L116.604747,251.166631 C123.039876,257.604569 133.477648,257.604569 139.921203,251.166631 L251.172245,139.9184 C257.61018,133.477654 257.61018,123.031455 251.172245,116.593517" fill="#DE4C36"></path>
        </g>
        </svg>
    )
}