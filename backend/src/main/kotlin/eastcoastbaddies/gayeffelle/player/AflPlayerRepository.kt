package eastcoastbaddies.gayeffelle.player

import org.springframework.data.jpa.repository.JpaRepository
import java.util.UUID

interface AflPlayerRepository : JpaRepository<AflPlayer, UUID>