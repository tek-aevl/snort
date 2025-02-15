import { useMemo } from "react";
import { Link } from "react-router-dom";
import { HexKey } from "@snort/nostr";

import { useUserProfile } from "Hooks/useUserProfile";
import { profileLink } from "Util";
import { getDisplayName } from "Element/ProfileImage";

export default function Mention({ pubkey, relays }: { pubkey: HexKey; relays?: Array<string> | string }) {
  const user = useUserProfile(pubkey);

  const name = useMemo(() => {
    return getDisplayName(user, pubkey);
  }, [user, pubkey]);

  return (
    <Link to={profileLink(pubkey, relays)} onClick={e => e.stopPropagation()}>
      @{name}
    </Link>
  );
}
